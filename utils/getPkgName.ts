import load from 'load-pkg';

export const getPkgName = (dirname: string) => {
  const pkg = load.sync(dirname);
  return pkg.name!.split('/').at(1);
};
