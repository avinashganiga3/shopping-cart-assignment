export type StringObject = {
  [key: string]: string;
};

export type CategoryT = {
  description: string;
  enabled: false;
  id: string;
  imageUrl: string;
  key: string;
  name: string;
  order: number;
};

export type ResposeT = {
  response: string;
  responseMessage: string;
};
