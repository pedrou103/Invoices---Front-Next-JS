interface HeaderProps {
    children?: React.ReactNode;
    title: string;
  }
  
  export default function Header({ children, title }: HeaderProps) {
    return (
        <header className="flex justify-between items-center">
            <h1>{title}</h1>
            {children}
        </header>
    );
}