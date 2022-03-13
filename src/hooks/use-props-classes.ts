export const usePropsClasses = (componentClasses: string, className?: string) => {
  if(className) {
    return `${componentClasses} ${className}`;
  } else {
    return componentClasses;
  }
}