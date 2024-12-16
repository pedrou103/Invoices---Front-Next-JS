export default function cardDetailsLayout({children}: { children: React.ReactNode }) {
    return (
        <>
            <p style={{ 
                backgroundColor: 'gold'
             }}>Especificações</p>
            {children}
        </>
    )
}