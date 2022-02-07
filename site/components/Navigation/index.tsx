import { FC } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { t } from "@lingui/macro";
import {
  HeaderDesktop,
  NavItemDesktop,
  HeaderMobile,
  NavItemMobile,
  ButtonPrimary,
} from "@klimadao/lib/components";

import { urls } from "@klimadao/lib/constants";

// dynamic import for ThemeToggle as its reads the document and localStorage of Browser
// see https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr

const ThemeToggle = dynamic(() => import("./ThemeToggle"), { ssr: false });

type PageName = "Home" | "Resources";

export type Props = {
  activePage: PageName;
};

export const Navigation: FC<Props> = (props) => {
  return (
    <>
      <HeaderDesktop
        link={Link}
        buttons={[
          <ThemeToggle key="ThemeToggle" />,
          <ButtonPrimary
            key="Enter App"
            label={t`Enter App`}
            href={urls.app}
          />,
        ]}
      >
        <NavItemDesktop
          url={"/"}
          name={t({ message: "Home", id: "mainNav.home" })}
          link={Link}
          active={props.activePage === "Home"}
        />
        <NavItemDesktop
          url={urls.tutorial}
          name={t`Get Klima`}
          rel="noopener noreferrer"
          target="_blank"
        />
        <NavItemDesktop
          url={urls.stake}
          name={t({ message: "Stake", id: "mainNav.stake" })}
        />
        <NavItemDesktop
          url={urls.bond}
          name={t({ message: "Bond", id: "mainNav.bond" })}
        />
        <NavItemDesktop
          url="/blog"
          name={t`Resources`}
          link={Link}
          active={props.activePage === "Resources"}
        />
      </HeaderDesktop>
      <HeaderMobile buttons={[<ThemeToggle key="ThemeToggle" />]}>
        <NavItemMobile
          url={"/"}
          name={t({ message: "Home", id: "mainNav.home" })}
        />
        <NavItemMobile
          url={urls.tutorial}
          name={t`Get Klima`}
          target="_blank"
          rel="noreferrer noopener"
        />
        <NavItemMobile
          url={urls.stake}
          name={t({ message: "Stake", id: "mainNav.stake" })}
        />
        <NavItemMobile
          url={urls.bond}
          name={t({ message: "Bond", id: "mainNav.bond" })}
        />
        <NavItemMobile url="/blog" name={t`Resources`} />
      </HeaderMobile>
    </>
  );
};