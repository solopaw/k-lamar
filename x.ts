import { ProductImageModal } from "@/app/(store)/product/[slug]/product-image-modal";
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { publicUrl } from "@/env.mjs";
import { getLocale, getTranslations } from "@/i18n/server";
import { getRecommendedProducts } from "@/lib/search/trieve";
import { cn, deslugify, formatMoney, formatProductName } from "@/lib/utils";
import type { TrieveProductMetadata } from "@/scripts/upload-trieve";
import { AddToCartButton } from "./ui/add-to-cart-button";
import { JsonLd, mappedProductToJsonLd } from "./ui/json-ld";
import { Markdown } from "./ui/markdown";
import { MainProductImage } from "./ui/products/main-product-image";
import { StickyBottom } from "./ui/sticky-bottom";
import { YnsLink } from "./ui/yns-link";
import * as Commerce from "commerce-kit";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next/types";
import { Suspense } from "react";
import { NavMobileMenu } from "./ui/nav/nav-mobile-menu.client";
import { ClearCookieClientComponent } from "./ui/checkout/clear-cookie-client-component";
import { useRouterNoRender } from "./lib/use-router-no-render";
