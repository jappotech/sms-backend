import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload-ts';
import * as fs from 'fs';
import * as path from 'path';
import * as XLSX from 'xlsx';
import * as csvParser from 'csv-parser';

@Resolver()
export class FileUploadResolver {
  @Mutation(() => Boolean, { name: 'fileUpload' })
  async uploadFile(
    @Args({ name: 'file', type: () => GraphQLUpload }) file: FileUpload,
  ): Promise<boolean> {
    const { createReadStream, filename } = file;
    const stream = createReadStream();
    const out = fs.createWriteStream(
      path.join(__dirname, '/uploads', filename),
    );
    stream.pipe(out);

    await new Promise((resolve, reject) => {
      out.on('finish', resolve);
      out.on('error', reject);
    });

    // Process the file (e.g., read Excel or CSV)
    const filePath = path.join(__dirname, '../../uploads', filename);
    if (filename.endsWith('.xlsx') || filename.endsWith('.xls')) {
      const workbook = XLSX.readFile(filePath);
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const data = XLSX.utils.sheet_to_json(sheet);
      // Save data to database using Prisma
      console.log(data);
    } else if (filename.endsWith('.csv')) {
      const results = [];
      fs.createReadStream(filePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          // Save data to database using Prisma
          console.log(results);
        });
    }

    return true;
  }
}
