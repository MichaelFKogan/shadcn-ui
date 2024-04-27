export function HeroBanner({hideBanner, handleBannerToggle}) {
    return (
        <>

            {hideBanner ? (
                <>
                    <h1 className="h1">Find your travel inspiration</h1>
                    <p className="text-foreground-lighter text-xl">A collection of digital nomad content.</p>
                </>
            ) : null}

            <div className="hide-banner text-xs text-muted-foreground font-normal hover:opacity-70" onClick={handleBannerToggle}>{hideBanner ? "Show" : "Hide"}</div>
            {/* <div className="change-banner text-xs text-muted-foreground font-normal hover:opacity-70" onClick={handleBannerToggle}>New Banner</div> */}

            <div className={`hero-banner ${hideBanner ? "hidden" : "block"}`}>

                <div className="snow-container" id="snow-container"></div>
                <div className="main-title">
                    <h1 className="h1">Find your travel inspiration</h1>
                    <p className="text-foreground-lighter text-xl">A collection of digital nomad content.</p>
                </div>
            </div>

        </>
    )
}

export default HeroBanner;
