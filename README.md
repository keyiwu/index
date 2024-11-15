# copilot  

项目描述：本项目基于react+brainAI进行开发，使用多模型进行互动，达到与jira 交互，并将实时asr引入进行，进行rm与custom的交互，风险识别 
# 项目目录结构  

以下是当前项目的目录结构：  

```  

└── LICENSE
├── assets/*
├── background/*
└── base.scss
├── build/*
├── component/*
├── contents/*
└── eslint.config.cjs
└── generateReadme.js
├── libs/*
├── misc
├── node_modules/*
├── options/*
└── options.tsx
└── package.json
└── pnpm-lock.yaml
└── postcss.config.js
├── provider/*
├── resources/*
├── rulesets/*
├── sidepanel/*
├── style/*
├── tabs/*
└── tailwind.config.js
└── tsconfig.json
├── utils/*
```  

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

```bash  
pnpm install  
```  

## 使用  

使用以下命令启动项目：  

```bash  
pnpm dev  
```  
github:https://github.com/keyiwu/index.git
## 许可证  

此项目基于 MIT 许可证。请参阅 [LICENSE](./LICENSE) 文件获取更多信息。  
