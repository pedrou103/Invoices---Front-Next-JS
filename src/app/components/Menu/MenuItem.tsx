import { IconLoader } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface MenuItemProps {
  href: string;
  title: string;
  iconName: string;
  isActive: boolean;
}

const MenuItem = ({ href, title, iconName, isActive }: MenuItemProps) => {
  const [IconComponent, setIconComponent] = useState<React.ComponentType<{ className?: string }> | null>(null);

  useEffect(() => {
    const fetchIcon = async () => {
      const icon = await loadIcon(iconName);
      setIconComponent(() => icon);
    };

    fetchIcon();
  }, [iconName]);

  return (
    <Link
      href={href}
      className={`flex gap-3 items-center p-3 rounded-2xl ${isActive ? `bg-sky-600 drop-shadow-sm text-slate-900` : `hover:bg-sky-600 hover:drop-shadow-md hover:text-slate-900`} transition`}
    >
      {IconComponent ? (
        <IconComponent className="h-7 w-7" />
      ) : (
        <IconLoader className='h-7 w-7' />
      )}
      <p className="font-semibold">{title}</p>
    </Link>
  );
};

export default MenuItem;

// Função para importar ícones dinamicamente
const loadIcon = async (iconName: string) => {
  const iconModule = await import('@tabler/icons-react');
  return iconModule[`Icon${iconName}`];
};
