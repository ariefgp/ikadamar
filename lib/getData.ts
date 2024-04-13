import { promises as fs } from 'fs';

export const getData = async () => {
    const file = await fs.readFile(process.cwd() + '/data/people.json', 'utf8');
    const data = JSON.parse(file);

    return data;
}
