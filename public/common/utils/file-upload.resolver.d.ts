import { FileUpload } from 'graphql-upload-ts';
export declare class FileUploadResolver {
    uploadFile(file: FileUpload): Promise<boolean>;
}
