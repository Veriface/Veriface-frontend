export type FeatureCardType = {
  id: number;
  Icon: any;
  title: string;
  content: string;
};

export type BtnProps = {
  className?: string;
  children: React.ReactNode;
};

export type SelectCardType = {
  Icon: any;
  btnText: string;
  content: string;
  href: string;
};


export type FormInputType = {
  label: string;
  type: string;
  htmlFor: string;
  value: string;
}