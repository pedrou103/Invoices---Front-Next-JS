import { MenuItemProps } from '@/app/lib/definitions';
import { loadIcon } from '@/app/lib/tools';
import { IconLoader } from '@tabler/icons-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';

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
      className={`flex gap-2 items-center p-2 rounded-xl text-sm ${isActive ? `bg-purple-300 drop-shadow-sm text-slate-900` : `hover:bg-purple-300 hover:drop-shadow-md hover:text-slate-900`} transition`}
    >
      {IconComponent ? (
        <IconComponent className="h-6 w-6" />
      ) : (
        <IconLoader className='h-6 w-6' />
      )}
      <p className="">{title}</p>
    </Link>
  );
};

export default MenuItem;
