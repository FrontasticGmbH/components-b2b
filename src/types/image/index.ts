export interface Gravity {
  mode?: string;
  coordinates?: { x: number; y: number };
}

export interface Image {
  title?: string | Record<string, string>;
  src?: string;
  width?: number;
  height?: number;
  suffix?: string;
  media?: {
    mediaId?: string;
    file?: string;
    format?: string;
    name?: string;
    width?: number | string;
    height?: number | string;
    metaData?: string;
    resourceType?: string;
    size?: number;
    tags?: string[];
    _type?: string;
    alt?: string;
  };
  ratio?: string;
  gravity?: Gravity;
}
