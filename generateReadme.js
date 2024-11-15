const fs = require('fs');  
const path = require('path');  
function generateOneLevelDirectoryTree(dirPath) {  
    let tree = '';  
    const items = fs.readdirSync(dirPath);  
    
    items.forEach(item => {  
      const itemPath = path.join(dirPath, item);  
      const stat = fs.statSync(itemPath);  
      
      // 在一层目录中生成树状结构  
      const branch = stat.isDirectory() ? '├── ' : '└── ';  
      tree += `${branch}${item}\n`;  
    });  
    
    return tree;  
  }  
  

// 项目根目录  
const projectRoot = path.join(__dirname); // 当前目录，可以修改为指定目录  
const directoryTree = generateOneLevelDirectoryTree(projectRoot);  

// 定义 README 内容  
const readmeContent = `# Dbs copilot  

项目描述：本项目基于react+brainAI进行开发，使用多模型进行互动，达到与jira 交互，并将实时asr引入进行，进行rm与custom的交互，风险识别 
# 项目目录结构  

以下是当前项目的目录结构：  

\`\`\`  
${directoryTree}\`\`\`  

## 说明  

此项目包含以下目录与文件，这些文件和目录用来组织和管理项目的不同部分。  

- **asset/**: 公共资源 
- **background/**:chrome background 定制文件   
- **options/**: chrome extension 的配置项
- **libs/**: chrome extension model的配置项
- **utils/**: 开发快捷方法
- **contents/**: 插入页面的js
- **provider/**: 项目的公共的服务
- **resource/**: 项目的资源
- **sidepanel/**: 侧边栏页面
- **tabs/**: 项目的tabs定义
- **README.md**: 项目描述文件  
## 安装  

请使用以下命令安装项目所需的依赖：  

\`\`\`bash  
pnpm install  
\`\`\`  

## 使用  

使用以下命令启动项目：  

\`\`\`bash  
pnpm dev  
\`\`\`  

## 许可证  

此项目基于 MIT 许可证。请参阅 [LICENSE](./LICENSE) 文件获取更多信息。  
`;  

// 定义文件路径  
const filePath = path.join(__dirname, 'README.md');  

// 写入 README 文件  
fs.writeFile(filePath, readmeContent, (err) => {  
  if (err) {  
    console.error('创建 README 文件时出错:', err);  
  } else {  
    console.log('README 文件已成功创建！');  
  }  
});