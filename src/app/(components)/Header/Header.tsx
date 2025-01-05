interface HeaderProps {
    children?: React.ReactNode;
    title: string;
  }
  
  export default function Header({ children, title }: HeaderProps) {
    return (
        <header className="flex justify-between items-center">
            <h3>{title}</h3>
            {children}
        </header>
    );
}