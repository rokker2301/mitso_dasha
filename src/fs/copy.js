import fs from 'fs/promises'
import path from 'path';
import url from 'url';

const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

const copy = async () => {
    try{

        if(fs.access(path.join(__dirname, 'files'))) {
            if(fs.access(path.join(__dirname, 'files_copy'))) throw new Error("Такая папка уже существует")
        
            // fs.mkdir(path.join(__dirname, 'files_copy'), {
            //    flag: "wx"
            //});
   

            await fs.cp(path.join(__dirname, 'files'), path.join(__dirname, 'files_copy'),  {
                flag:  "wx"
            });

            console.log("Файлы скопированы")
        } else 
            throw new Error("Такой папки не существует")

    }catch (err) {
        console.log(err.message);
    }
};

await copy();
