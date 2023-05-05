import { Inter, Lora, Source_Sans_Pro } from 'next/font/google';
import localFont from 'next/font/local';
 
// define your variable fonts
const inter = Inter({ subsets: ['latin'] });
const lora = Lora({ subsets: ['latin'] });
// define 2 weights of a non-variable font
const sourceCodePro400 = Source_Sans_Pro({ weight: '400', subsets: ['latin'] });
const sourceCodePro700 = Source_Sans_Pro({ weight: '700', subsets: ['latin'] });
 
export { inter, lora, sourceCodePro400, sourceCodePro700 };