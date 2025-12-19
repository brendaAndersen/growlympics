import Image from "next/image";
import Link from "next/link";

export default function UsersPage(){
    return (
        <div>
            <h2>Users</h2>

            <Link href="/">Página Home</Link>
            <Image 
                src="/assets/globe.svg" 
                width={500}
                height={500}
                alt="Imagem"
            />
        </div>
    )
}