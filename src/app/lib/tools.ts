// Função para importar ícones dinamicamente
export const loadIcon = async (iconName: string) => {
    const iconModule = await import('@tabler/icons-react');
    return iconModule[`Icon${iconName}`];
};