export type GetUserType = {
  id: string;
  uid: string;
  userId: number;
  role: string;
  permissions: string[];
};

export type Upload = {
  filename: string;
  mimetype: string;
  encoding: string;
  createReadStream: () => NodeJS.ReadableStream;
};
