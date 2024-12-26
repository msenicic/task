"use client";

import Link from "next/link";

export default function ShareBox({ title, id }) {
  const encodedUrl = encodeURIComponent(`${process.env.NEXT_PUBLIC_BASE_URL}/investera/${id}`);
  const encodedTitle = encodeURIComponent(title);

  const socialNetworks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/shareArticle?url=${encodedUrl}&title=${encodedTitle}`,
  };

  const shareIcons = {
    facebook: "bi bi-facebook",
    twitter: "bi bi-twitter",
    linkedin: "bi bi-linkedin",
  };

  const handleNativeShare = () => {
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: `${process.env.NEXT_PUBLIC_BASE_URL}/investera/${id}`,
        })
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Sharing not supported in this browser.");
    }
  };

  return (
    <div className="d-flex gap-3">
        <div onClick={handleNativeShare} className="text-primary fs-2" style={{ cursor: "pointer" }}>
            <i className="bi bi-share-fill"></i>
        </div>
        {Object.entries(socialNetworks).map(([network, shareUrl]) => (
            <Link key={network} href={shareUrl} target="_blank" rel="noopener" className="text-primary fs-2">
                <i className={shareIcons[network]}></i>
            </Link>
        ))}
    </div>
  );
}
