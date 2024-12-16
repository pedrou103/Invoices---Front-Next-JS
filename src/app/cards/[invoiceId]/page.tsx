import Link from "next/link";
import { notFound } from "next/navigation"

interface InfoParams {
    params: {
        invoiceId: number
    };
}

export default function Invoice({ params }: InfoParams){
    if (params.invoiceId > 1000) {
        notFound()
    }

    return (
        <div>
            <Link href={'/cards'}>Voltar</Link>
            <p>Informações da fatura do cartão {params.invoiceId}</p>
        </div>
    )
}