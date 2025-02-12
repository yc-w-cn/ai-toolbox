export interface AITool {
  name: string;
  icon: string;
  url: string;
}

export const aiTools: AITool[] = [
  {
    name: "DeepSeek",
    icon: "/assets/ai-tools/deepseek.png",
    url: "https://www.deepseek.com",
  },
  {
    name: "ChatGPT",
    icon: "/assets/ai-tools/chatgpt.png",
    url: "https://chat.openai.com",
  },
  {
    name: "豆包",
    icon: "/assets/ai-tools/doubao.png",
    url: "https://www.doubao.com",
  },
];