"use client";
import { useEffect } from "react";

// Mount this component once (e.g. in layout) to listen for the loader completion event
export default function LoaderCompleteListener() {
	useEffect(() => {
		const onDone = () => document.body.classList.add("after-loader");
		window.addEventListener("codelite-loader-complete", onDone);
		return () => window.removeEventListener("codelite-loader-complete", onDone);
	}, []);
	return null;
}
