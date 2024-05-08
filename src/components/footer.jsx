import React from 'react';

const Image = ({ src }) => (
  <img loading="lazy" src={src} className="shrink-0 w-6 aspect-square" />
);

const FooterLink = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const FooterText = ({ children }) => (
  <div className="my-auto">{children}</div>
);

const Footer = () => (
  <div className="flex flex-col justify-center px-12 py-16 text-lg leading-5 bg-neutral-100 rounded-[40px] text-zinc-900 max-md:px-5">
    <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
      <div className="flex gap-2.5 font-medium">
        <Image
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9ae5d93276811c74c5d0bc156e99dd566888ef3100bfbcb4bef8b31d0a29799c?apiKey=03b709cbd0bb43d185c9782bb4c80379&"
        />
        <FooterText>Talup 2023. All rights reserved</FooterText>
      </div>
      <div className="flex gap-5 justify-between my-auto">
        <FooterLink className="underline">Terms & Conditions</FooterLink>
        <FooterLink className="underline">Privacy Policy</FooterLink>
      </div>
    </div>
  </div>
);

export default Footer;