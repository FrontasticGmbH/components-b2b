export type URLParam = {
  key: string;
  value: string;
};

type updateURLParamsProps = (params: URLParam[]) => string;

export const updateURLParams: updateURLParamsProps = (params) => {
  const url = new URL(window.location.href);
  const nextURLParams = new URLSearchParams(url.search);

  const unusedParams = Array.from(nextURLParams.keys()).filter(
    (key) => params.findIndex((param) => param.key === key) === -1,
  );

  params.map(({ key, value }) => {
    nextURLParams.set(key, value);
  });
  unusedParams.map((key) => {
    key !== 'query' && nextURLParams.delete(key);
  });

  const updatedURL = `${url.pathname}?${nextURLParams.toString()}`;

  return updatedURL;
};
