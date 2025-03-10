#!/usr/bin/env python3
"""
Generate PNG images from Mermaid diagram files.
Requires Node.js and the @mermaid-js/mermaid-cli package to be installed.

Installation:
    npm install -g @mermaid-js/mermaid-cli

Usage:
    python scripts/generate_diagrams.py
"""

import os
import subprocess
import glob
import re
from pathlib import Path

def ensure_dir(directory):
    """Ensure directory exists."""
    Path(directory).mkdir(parents=True, exist_ok=True)

def convert_mermaid_to_png():
    """Convert all Mermaid files to PNG with enhanced readability."""
    # Get all .mmd files in the diagrams directory
    diagram_files = glob.glob("diagrams/*.mmd")
    
    # Create output directory if it doesn't exist
    ensure_dir("diagrams/png")
    
    # Create a custom Mermaid config file for better readability
    config_file = "diagrams/mermaid-config.json"
    with open(config_file, "w") as f:
        f.write('''{
  "theme": "default",
  "themeVariables": {
    "primaryColor": "#326CE5",
    "primaryTextColor": "#fff",
    "primaryBorderColor": "#285BB0",
    "lineColor": "#333333",
    "secondaryColor": "#32A852",
    "tertiaryColor": "#ffffff",
    "noteBackgroundColor": "#fff5ad",
    "noteBorderColor": "#f9e264",
    "noteBkgColor": "#fff5ad",
    "noteBorderColor": "#f9e264",
    "noteTextColor": "#333",
    "activationBorderColor": "#666",
    "activationBkgColor": "#f4f4f4",
    "sequenceNumberColor": "#fff",
    "actorBkg": "#4D7EBA",
    "actorTextColor": "white",
    "actorLineColor": "#2C4A6B",
    "labelBoxBkgColor": "#eeeeff",
    "labelBoxBorderColor": "#9999ff",
    "labelTextColor": "#333",
    "loopTextColor": "#333",
    "altSectionBkgColor": "#f9f9f9",
    "taskTextColor": "#333",
    "taskTextOutsideColor": "#333",
    "taskTextLightColor": "#333",
    "fontSize": "16px",
    "fontFamily": "Arial, sans-serif"
  },
  "flowchart": {
    "htmlLabels": true,
    "curve": "basis",
    "useMaxWidth": false,
    "rankSpacing": 100,
    "nodeSpacing": 50
  },
  "sequence": {
    "diagramMarginX": 50,
    "diagramMarginY": 30,
    "actorMargin": 50,
    "boxMargin": 10,
    "boxTextMargin": 5,
    "noteMargin": 10,
    "messageMargin": 35
  },
  "classDef": {
    "frontend": "fill:#47A0FF,stroke:#333,stroke-width:2px",
    "api": "fill:#64C168,stroke:#333,stroke-width:2px",
    "database": "fill:#FF6B6B,stroke:#333,stroke-width:2px",
    "queue": "fill:#FFBD45,stroke:#333,stroke-width:2px",
    "worker": "fill:#B685FF,stroke:#333,stroke-width:2px",
    "client": "fill:#96D9D6,stroke:#333,stroke-width:2px",
    "k8s": "fill:#FFD480,stroke:#333,stroke-width:2px",
    "graphStyle1": "fill:#f2f2f2,stroke:#333,stroke-width:1px,color:#333,font-weight:bold",
    "rmqStyle": "fill:#fef5e7,stroke:#333,stroke-width:1px,color:#333",
    "ec2Style": "fill:#f9f9f9,stroke:#333,stroke-width:1px,color:#333,font-weight:bold",
    "k8sStyle": "fill:#edf8fb,stroke:#333,stroke-width:1px,color:#333,font-weight:bold",
    "namespaceStyle": "fill:#f5edf8,stroke:#333,stroke-width:1px,color:#333",
    "ingressStyle": "fill:#ffebcd,stroke:#333,stroke-width:1px,color:#333",
    "pod": "fill:#64C168,stroke:#333,stroke-width:2px",
    "service": "fill:#47A0FF,stroke:#333,stroke-width:2px",
    "volume": "fill:#FF6B6B,stroke:#333,stroke-width:2px",
    "internet": "fill:#96D9D6,stroke:#333,stroke-width:2px",
    "ingress": "fill:#FFBD45,stroke:#333,stroke-width:2px"
  }
}''')

    # Process each file
    for mmd_file in diagram_files:
        # Determine the output PNG file name
        base_name = os.path.basename(mmd_file).replace('.mmd', '')
        png_file = f"diagrams/png/{base_name}.png"
        
        # Determine optimal parameters based on diagram type
        with open(mmd_file, 'r') as f:
            content = f.read()
            
        # Set diagram-specific parameters
        width = "1500"
        height = "1200"
        scale = "1.5"
        
        # Sequence diagrams are typically taller than they are wide
        if content.strip().startswith("sequenceDiagram"):
            width = "1400"
            height = "1500"
            scale = "1.6"
        # Flow charts often need more width
        elif "graph " in content[:50]:
            width = "1800"
            height = "1400"
            scale = "1.5"
            
        # Run mmdc command to convert Mermaid to PNG with improved settings
        cmd = [
            "mmdc",
            "-i", mmd_file,
            "-o", png_file,
            "-b", "white",        # White background for better contrast
            "-w", width,          # Width based on diagram type
            "-H", height,         # Height based on diagram type
            "-c", config_file,    # Custom config for styling
            "-s", scale,          # Scale factor for better visibility
            "--pdfFit"            # Ensure diagram fits within boundaries
        ]
        
        print(f"Converting {mmd_file} -> {png_file}")
        try:
            subprocess.run(cmd, check=True)
            print(f"✅ Successfully generated {png_file}")
        except subprocess.CalledProcessError as e:
            print(f"❌ Error generating {png_file}: {e}")
        except FileNotFoundError:
            print("❌ Error: mmdc command not found. Please install @mermaid-js/mermaid-cli:")
            print("   npm install -g @mermaid-js/mermaid-cli")
            return False
    
    return True

def remove_styling_from_diagram_files():
    """Remove styling sections from diagram files since they are now in the central config."""
    for mmd_file in glob.glob("diagrams/*.mmd"):
        with open(mmd_file, 'r') as f:
            content = f.read()
            
        # Remove style sections
        # Pattern for class definitions: classDef xxx ...;
        content = re.sub(r'\n\s*classDef\s+[^;]+;', '', content)
        
        # Pattern for style applications: style xxx ...;
        content = re.sub(r'\n\s*style\s+[^;]+;', '', content)
        
        # Pattern for class assignments: class xxx yyy;
        content = re.sub(r'\n\s*class\s+[^;]+;', '', content)
        
        # Pattern for style sections: %% Styles ...
        content = re.sub(r'\n\s*%% Styles.*?(?=\n\s*%%|\Z)', '', content, flags=re.DOTALL)
        
        # Pattern for Apply styles comments
        content = re.sub(r'\n\s*%% Apply styles.*?(?=\n\s*%%|\Z)', '', content, flags=re.DOTALL)
        
        # Save the modified content back to the file
        with open(mmd_file, 'w') as f:
            f.write(content)
            
        print(f"✅ Removed styling from {mmd_file}")
    
    print("✅ All diagram files updated to use central styling")

def update_readme():
    """Update README.md to reference PNG images instead of .mmd files."""
    readme_path = "README.md"
    
    with open(readme_path, 'r') as f:
        content = f.read()
    
    # Replace references to .mmd files with references to PNG files
    updated_content = content.replace('diagrams/system_architecture.mmd', 'diagrams/png/system_architecture.png')
    updated_content = updated_content.replace('diagrams/document_processing_flow.mmd', 'diagrams/png/document_processing_flow.png')
    updated_content = updated_content.replace('diagrams/kubernetes_deployment_architecture.mmd', 'diagrams/png/kubernetes_deployment_architecture.png')
    
    # Also replace any embedded mermaid blocks for the diagrams we have in files
    # This is optional and would need customization based on your exact mermaid content
    
    with open(readme_path, 'w') as f:
        f.write(updated_content)
    
    print(f"✅ Updated {readme_path} to reference PNG images")

if __name__ == "__main__":
    print("Generating PNG images from Mermaid diagrams...")
    print("Centralizing styling in the configuration...")
    
    # First remove styling sections from diagram files
    remove_styling_from_diagram_files()
    
    # Then generate the PNG files with central styling
    if convert_mermaid_to_png():
        update_readme()
        print("\n✨ Done! Your README.md now references PNG images that should display correctly on GitHub.")
    else:
        print("\n❌ Failed to generate PNG images. Please check the errors above.") 