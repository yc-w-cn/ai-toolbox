export interface AITool {
  name: string;
  icon: string;
  url: string;
}

export const aiTools: AITool[] = [
  {
    name: "DeepSeek",
    icon: "/assets/ai-tools/deepseek.png",
    url: "https://chat.deepseek.com/",
  },
  {
    name: "ChatGPT",
    icon: "/assets/ai-tools/chatgpt.png",
    url: "https://chat.openai.com/chat",
  },
  {
    name: "豆包",
    icon: "/assets/ai-tools/doubao.png",
    url: "https://www.doubao.com/chat/",
  },
  {
    name: "KIMI",
    icon: "/assets/ai-tools/kimi.jpg",
    url: "https://kimi.moonshot.cn/",
  },
];