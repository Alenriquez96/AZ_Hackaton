import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";

const AppleWallet = () => {
  const router = useRouter();

  let isIOS =
    typeof window !== "undefined"
      ? /iPad|iPhone|iPod/.test(navigator.platform) ||
        (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1)
      : false;

  const appleWalletCall = async () => {
    try {
      const res: any = await fetch(
        "https://mediguide-api-latest.onrender.com/v1/wallet?product=Humalog",
        {
          method: "POST",
        }
      );
      if (res.ok) {
        const data = await res.json();
        router.push(data.linkToPassPage);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      onClick={appleWalletCall}
      radius="md"
      className={`bg-black text-white h-[50px] ${isIOS ? "block" : "hidden"}`}
    >
      <AppleWalletIcon />
      <div className="m-5">
        <p className="text-[8px]">Add to</p>
        <p>Apple Wallet</p>
      </div>
    </Button>
  );
};

export default AppleWallet;

const AppleWalletIcon = () => {
  return (
    <svg
      width="24"
      height="18"
      viewBox="0 0 24 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <mask
        id="mask0_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_497_10844)">
        <path
          d="M23.0112 1.23212H1.4668V16.0876H23.0112V1.23212Z"
          fill="#DEDBCE"
        />
      </g>
      <mask
        id="mask1_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask1_497_10844)">
        <path
          d="M22.7814 1.46851H1.71533V10.3189H22.7814V1.46851Z"
          fill="#40A5D9"
        />
      </g>
      <mask
        id="mask2_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask2_497_10844)">
        <rect
          x="0.655029"
          y="2.06323"
          width="23.3869"
          height="11.0487"
          fill="url(#pattern0)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.7814 5.23284C22.7814 5.16113 22.7814 5.09031 22.7814 5.0186C22.7814 4.9584 22.7805 4.89819 22.7787 4.83799C22.7752 4.70697 22.7671 4.57506 22.7439 4.4458C22.7197 4.31478 22.6813 4.1926 22.6196 4.07309C22.5597 3.95623 22.481 3.84822 22.3872 3.75526C22.2933 3.6623 22.1851 3.5844 22.0662 3.52419C21.9455 3.46311 21.8222 3.42504 21.6898 3.40114C21.5593 3.37812 21.4261 3.37015 21.2938 3.36661C21.233 3.36484 21.1722 3.36395 21.1114 3.36395C21.039 3.36395 20.9675 3.36395 20.8951 3.36395H20.8361H4.4286H3.60166C3.52925 3.36395 3.45773 3.36395 3.38531 3.36395C3.32452 3.36395 3.26373 3.36484 3.20294 3.36661C3.07063 3.37015 2.93742 3.37812 2.8069 3.40114C2.67459 3.42504 2.55122 3.46311 2.43053 3.52419C2.31252 3.58351 2.20345 3.66142 2.10958 3.75526C2.01571 3.84822 1.93704 3.95534 1.87714 4.07309C1.81546 4.1926 1.77702 4.31478 1.75288 4.4458C1.72964 4.57506 1.72159 4.70697 1.71801 4.83799C1.71623 4.89819 1.71533 4.9584 1.71533 5.0186C1.71533 5.09031 1.71533 5.16113 1.71533 5.23284V6.05175V5.40813V12.2153H22.7814V5.45151V5.23284Z"
          fill="#FFB003"
        />
      </g>
      <mask
        id="mask3_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask3_497_10844)">
        <rect
          x="0.655029"
          y="3.97552"
          width="23.3869"
          height="11.0487"
          fill="url(#pattern1)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.7814 7.1292C22.7814 7.05749 22.7814 6.98667 22.7814 6.91496C22.7814 6.85476 22.7805 6.79456 22.7787 6.73436C22.7752 6.60333 22.7671 6.47142 22.7439 6.34216C22.7197 6.21114 22.6813 6.08897 22.6196 5.96945C22.5597 5.85259 22.481 5.74458 22.3872 5.65162C22.2933 5.55866 22.1851 5.48076 22.0662 5.42056C21.9455 5.35947 21.8222 5.3214 21.6898 5.2975C21.5593 5.27448 21.4261 5.26651 21.2938 5.26297C21.233 5.2612 21.1722 5.26031 21.1114 5.26031C21.039 5.26031 20.9675 5.26031 20.8951 5.26031H20.8352H4.4286H3.60166C3.52925 5.26031 3.45773 5.26031 3.38531 5.26031C3.32452 5.26031 3.26373 5.2612 3.20294 5.26297C3.07063 5.26651 2.93742 5.27448 2.8069 5.2975C2.67459 5.3214 2.55122 5.35947 2.43053 5.42056C2.31252 5.47987 2.20345 5.55778 2.10958 5.65162C2.01571 5.74458 1.93704 5.8517 1.87714 5.96945C1.81546 6.08897 1.77702 6.21114 1.75288 6.34216C1.72964 6.47142 1.72159 6.60333 1.71801 6.73436C1.71623 6.79456 1.71533 6.85476 1.71533 6.91496C1.71533 6.98667 1.71533 7.05749 1.71533 7.1292V7.94812V7.30449V14.1116H22.7814V7.34787V7.1292Z"
          fill="#40C740"
        />
      </g>
      <mask
        id="mask4_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask4_497_10844)">
        <rect
          x="0.655029"
          y="5.88776"
          width="23.3869"
          height="11.0487"
          fill="url(#pattern2)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.7814 9.02544C22.7814 8.95373 22.7814 8.88291 22.7814 8.8112C22.7814 8.751 22.7805 8.6908 22.7787 8.63059C22.7752 8.49957 22.7671 8.36766 22.7439 8.2384C22.7197 8.10738 22.6813 7.9852 22.6196 7.86569C22.5597 7.74883 22.481 7.64082 22.3872 7.54786C22.2933 7.4549 22.1851 7.377 22.0662 7.3168C21.9455 7.25571 21.8222 7.21764 21.6898 7.19374C21.5593 7.17072 21.4261 7.16275 21.2938 7.15921C21.233 7.15744 21.1722 7.15656 21.1114 7.15656C21.039 7.15656 20.9675 7.15656 20.8951 7.15656H20.8352H4.4286H3.60166C3.52925 7.15656 3.45773 7.15656 3.38531 7.15656C3.32452 7.15656 3.26373 7.15744 3.20294 7.15921C3.07063 7.16275 2.93742 7.17072 2.8069 7.19374C2.67459 7.21764 2.55122 7.25571 2.43053 7.3168C2.31252 7.37611 2.20345 7.45402 2.10958 7.54786C2.01571 7.64082 1.93704 7.74794 1.87714 7.86569C1.81546 7.9852 1.77702 8.10738 1.75288 8.2384C1.72964 8.36766 1.72159 8.49957 1.71801 8.63059C1.71623 8.6908 1.71533 8.751 1.71533 8.8112C1.71533 8.88291 1.71533 8.95373 1.71533 9.02544V9.84435V9.20074V16.0079H22.7814V9.24412V9.02544Z"
          fill="#F26D5F"
        />
      </g>
      <mask
        id="mask5_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask5_497_10844)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.438721 0.204285V10.0029H1.71534V4.15542V3.33651C1.71534 3.2648 1.71534 3.19398 1.71534 3.12227C1.71534 3.06206 1.71624 3.00186 1.71803 2.94166C1.7216 2.81064 1.72965 2.67872 1.75289 2.54947C1.77703 2.41844 1.81547 2.29627 1.87716 2.17675C1.93705 2.05989 2.01573 1.95189 2.1096 1.85893C2.20436 1.76686 2.31253 1.68895 2.43054 1.62963C2.55123 1.56855 2.6746 1.53048 2.80691 1.50658C2.93743 1.48356 3.07064 1.47559 3.20295 1.47205C3.26374 1.47028 3.32453 1.46939 3.38532 1.46939C3.45774 1.46939 3.52926 1.46939 3.60167 1.46939H4.42862H20.8316H20.8951C20.9675 1.46939 21.039 1.46939 21.1114 1.46939C21.1722 1.46939 21.233 1.47028 21.2938 1.47205C21.4261 1.47559 21.5593 1.48356 21.6899 1.50658C21.8222 1.53048 21.9455 1.56855 22.0662 1.62963C22.1842 1.68895 22.2933 1.76686 22.3872 1.8607C22.481 1.95366 22.5597 2.06078 22.6196 2.17853C22.6813 2.29804 22.7197 2.42021 22.7439 2.55124C22.7671 2.6805 22.7752 2.81241 22.7787 2.94343C22.7805 3.00363 22.7814 3.06383 22.7814 3.12404C22.7814 3.19575 22.7814 3.26657 22.7814 3.33828V4.15719V10.0047H24.058V0.204285H0.438721Z"
          fill="#D9D6CC"
        />
      </g>
      <mask
        id="mask6_497_10844"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="18"
      >
        <path
          d="M23.7388 14.4099V14.6446C23.7388 14.757 23.7388 14.8694 23.7379 14.9819C23.737 15.0766 23.7361 15.1713 23.7335 15.266C23.7281 15.4723 23.7156 15.6804 23.6789 15.884C23.6414 16.0911 23.5797 16.2841 23.4831 16.4718C23.3884 16.6569 23.2641 16.826 23.1157 16.972C22.9673 17.119 22.7966 17.2412 22.6106 17.3359C22.4211 17.4315 22.2262 17.4926 22.017 17.5298C21.8114 17.5661 21.6013 17.5785 21.393 17.5838C21.2973 17.5864 21.2017 17.5873 21.106 17.5882C20.9925 17.5891 20.8789 17.5891 20.7654 17.5891L19.4611 17.5882L20.6751 17.5891H3.82064L5.03468 17.5882L3.73034 17.5891C3.61681 17.5891 3.50327 17.5891 3.38973 17.5882C3.29407 17.5873 3.19842 17.5864 3.10276 17.5838C2.89446 17.5785 2.68437 17.5661 2.47875 17.5298C2.26956 17.4926 2.07556 17.4315 1.88514 17.3359C1.69829 17.2421 1.52754 17.119 1.38003 16.972C1.23163 16.8251 1.10826 16.656 1.0126 16.4718C0.916049 16.2841 0.854364 16.0911 0.816816 15.884C0.780162 15.6804 0.767647 15.4723 0.762283 15.266C0.759601 15.1713 0.758706 15.0766 0.758706 14.9819C0.757812 14.8694 0.757813 14.757 0.757813 14.6446V14.4604V3.64901V4.75565V3.46486C0.757813 3.35243 0.757812 3.24 0.758706 3.12756C0.7596 3.03283 0.760495 2.93811 0.763177 2.84338C0.76854 2.6371 0.781056 2.42905 0.81771 2.22543C0.855258 2.01827 0.916943 1.82527 1.01349 1.63759C1.10826 1.45256 1.23252 1.28346 1.38093 1.13739C1.52933 0.990425 1.70008 0.868252 1.88603 0.773523C2.07556 0.67791 2.27045 0.616824 2.47964 0.579641C2.68526 0.543343 2.89535 0.530948 3.10365 0.525637C3.19931 0.522981 3.29497 0.522096 3.39062 0.52121C3.50416 0.520325 3.6177 0.520325 3.73124 0.520325H5.03468H20.676H20.7654C20.8789 0.520325 20.9925 0.520325 21.106 0.52121C21.2017 0.522096 21.2973 0.522981 21.393 0.525637C21.6013 0.530948 21.8114 0.543343 22.017 0.579641C22.2262 0.616824 22.4202 0.67791 22.6106 0.773523C22.7974 0.867366 22.9682 0.990425 23.1157 1.13739C23.2641 1.28435 23.3875 1.45344 23.4831 1.63759C23.5797 1.82527 23.6414 2.01827 23.6789 2.22543C23.7156 2.42905 23.7281 2.6371 23.7335 2.84338C23.7361 2.93811 23.737 3.03283 23.7379 3.12756C23.7388 3.24 23.7388 3.35243 23.7388 3.46486V3.69947V14.4099Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask6_497_10844)">
        <rect
          x="-0.632324"
          y="7.58759"
          width="25.9616"
          height="11.2611"
          fill="url(#pattern3)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.1248 9.05475C17.988 9.05475 17.8503 9.05475 17.7135 9.05564C17.5982 9.05652 17.4829 9.0574 17.3676 9.06095C17.1163 9.06803 16.8624 9.08219 16.6139 9.12646C16.3618 9.17161 16.1267 9.24509 15.8978 9.36018C15.8683 9.37523 15.2381 9.65853 14.6713 10.5314C14.2413 11.1945 13.4045 11.8975 12.2333 11.8975C11.0622 11.8975 10.2254 11.1945 9.79543 10.5314C9.19913 9.61161 8.5188 9.33539 8.56797 9.36018C8.33911 9.24421 8.10399 9.17161 7.85189 9.12646C7.60335 9.08219 7.34946 9.06714 7.09825 9.06095C6.98292 9.05829 6.8676 9.05652 6.75227 9.05564C6.61549 9.05475 6.47782 9.05475 6.34103 9.05475H0.440674V17.9043H24.06V9.05475H18.1248Z"
          fill="#DEDBCE"
        />
      </g>
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_497_10844"
            transform="scale(0.00884956 0.0172414)"
          />
        </pattern>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image1_497_10844"
            transform="scale(0.00884956 0.0172414)"
          />
        </pattern>
        <pattern
          id="pattern2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image2_497_10844"
            transform="scale(0.00884956 0.0172414)"
          />
        </pattern>
        <pattern
          id="pattern3"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image3_497_10844"
            transform="scale(0.008 0.0172414)"
          />
        </pattern>
        <image
          id="image0_497_10844"
          width="113"
          height="58"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAA6CAYAAACH4bZ/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAArlJREFUeNrsnG1vEkEUhXeXBSpUFCW+6zdN/P8/qGk00WhFY6CWsqD3JmfS6bpLoWGXNnlOckJ32NkPPNw7MzT3JglCCKE9KN3zfWh/+rsPiGn0Ghs1D6/sW0H08czckXNdZ4BsHODavDIXel3dBDOvGAuwuuYj8wO5r/uJyGYBOryF+Vy+0Fhtis1rItCBHZvH5qfmx7ruKzJZJ5tZ/wLA3+Yz+ZdgFttATKMIdGDPzW/lFwJ6JIgAbAZkIWAO75P5RO95hP6pS6vlSOwI1FjwPprfm18pGoHYDsRv5pHGF/IyWh9rIWa6Hpgn5ncC+MH80vzQ3GNNbBTiSmvgSDzm5p9KqXOB/C8a89IxIqRSh/ja/EZROFEU5gBsVGttIjOlz+/mz+YvArnQPbUQO4q0Y21mngneSA/u6eGo2Wh0FkMtXxOxGEWbyuWmdBrWQ5/wRB5FEcgZsR2FYAogx1rK4v1IGkdjVorEvib45EdaH7sAbE1picVAPIYCW7mpzCrS6VATB5smokZBhk1mTzC7m35oyUrfgFwT+noAafTwEdkppdGkDuLOE1FrIG/850N224no7ogjAxAREBEQERCBiICIgIiACEQERAREBEQgIiAiICIgAhEBEQERARGICIgIiAiIQET3RXnN+M4NcdDetPNnn1c8YJ1cb4gTeqhQl9EexPC5ryIeWzUjCgC9nNiL/73QfxbdB8R2Ic7E4EJMakHmJYCXmjg1fxU4Lzal0LRdiB6B52IwFZPLOpB5ib53bPBGOKca934qoVYctafQCmUqFmdiU2wDcSZwiR7gnTS6CbWKh9jYLMXjh5jMIojXQMbtMP244SXe3u5kmFw1XSCVHi6lLpVW54rEypSalv4OBf/B1OsfFuQ62qkWdWtiWnFNufc9OzNualqL7hZMhBBCzeqfAAMARUSzZ7uCWKkAAAAASUVORK5CYII="
        />
        <image
          id="image1_497_10844"
          width="113"
          height="58"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAA6CAYAAACH4bZ/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAqFJREFUeNrsnNtu00AURW3HdkJKUxAX8YAqUN/4//9BCCQQlIBQUtrGSZkj7ZGmxpNLZU9baS1pK7Xr8UNWzxkn1UyWAQBAD+Q9XQP9c9OHxLwjkEZeOwdL9MJGSqnXApFJBG5c1i6NXte7ZJYRgXZ+4jJVxjqHyOEFmrwrlwvlUueiLbZLYilxz1xeKrNAJPPkcPOfF/jH5Vz5LZnNPhJ9C51I4FuXdy6nEjnV9QgcTmQjYSbvs8tH/c4q9G+srXZJNFmvXN67fHA5c3mNxKQSv6v7ZapMyyqYHzsl5prvKpcjVd6pBJ7peCLJSBxO4lpz4Ew+li6/1FKXEvlfNZaR+fC5qu+NqtLaa60bw3BY23yi99na5w+XLy5fJfJK19xsq8RaEk8kbqbjWlVKFQ5fjbm6oX+wfBE8WI5UjdF2OpKspxo0019FFbRRJA6P9+BFWlc8bk1neViNRWvwWBJPgoElApMRftEyVhc8ltA69kxSdFTiVCKn2wbCoCILFU8tmdW2Yio6vqmp9hkIySpytGs6K+46EJKJ3PkPiOKuA+HhwOc+JAISAYmARCQCEgGJgEQkAhIBiYBEJAISAYmARCQCEgGJgEQkAhIBiYBEJMJjoYycP3hDHOiNg9/7suMGm+z2hjh+DxXWZaST6N/3deBjr82IvEBbTmyL/22h/yK4DolpJS7k4FJOoiLLlsBrDZy7fJM4W2zKQtO0Eq0CL+RgLifXMZFly77t2GAb4XzSedtPxa8Vh3T4rVDmcnEuN80+EhcSl+kGtuzb75pBJaZ9sFnJx085WQQSb4nMg1e/BYrtmHGkNlrRSu+1pa7UVpeqxM6Wmrd+9gv+fdhV8X5FboIn1SY2J+Ydxyz3fmSfGWOSkPfwZAIAwLD8E2AAOBuy81Gw3f4AAAAASUVORK5CYII="
        />
        <image
          id="image2_497_10844"
          width="113"
          height="58"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHEAAAA6CAYAAACH4bZ/AAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAvBJREFUeNrsnFtv00AQhX1NgkkvEYW+ICQET/z//4NASEBbUi5JyMVOmJHOiMF4mzRJnVQ6RzrazdbrB3+and1KO1FEURRFUZQqvsczcaBP7aYV3NTfGaKBSlybwokbp3YDuIQreOnGV5vAjO+AZ8BycSbuwF20GSNyLxFYiufiGdo5xhYO7J0wswBAHe+JC/FTtNbvo98B5IggtwIYAZBCm4hH4jH6E9efAmpwiW2CmAHSufhC/Fw8EJ+JT9H2EZEpAe4EskIEKsAf4p9ob8XX4hvxd8AsN4FoS2gPAF+KX4tfiV9gTCGeuEhkXtw9H1ok/gJEhXYl/ih+j2f1ud+hZbUJYoHoU4DvxG/FlwD4BJCZE/efE6cApSC/IlgiROrM5cggRNt95sh7F4hABfgGvwu3yUkJcK8gK7eZmSBdxciLt4jOMf7+XzRmgXw4wBJ6CYDnyIGJg0eA+wNpu/8l2hhRqXnxk/gzQM7c0SMYiR1APHM5sABALp8P+w+XFRhEWA1tY/kMHGwjuai/IKnlww5C+dTlwLwWgdTDwfQcDOQA+bEXSmOJ66eg3Uck2kRG4GFAdrEKngBoJ3Ska4rEouFAT4Dtgkxcnuy6DWW8DqJtbPJNJlKtRWS67jSQbDuRag3k2tNAsu1E6niU8BMQIkWIFCFShEiIFCFShEgRIiFShEgRIkWIhEgRIkWIFCESIkWIFCFShEiIFCFShEgRIiFSj0RZYHzVYKod3fvbZw0v8BWOyuhvDRXey2gPon33yvHYqBiRAdTrxFrJQS/6j9xzhNguRCtONAWTIMisBnCOiUPxF4DTy6a8aNouRI3ACRgMwWQeApnV6GvFBq1i9AHjWhTH7opT7alCBA7B4gZsyk0gjgAuwgv02nce8a7iITY2C/D4BiYjB/EfkL5+qZVA0YoZVpQv51J60CXVihONEYmNS2pc69uFfzNrtx0W5NLtVMtQTowbfvO69yM7M4YgEd7xwaQo6qj1R4ABAM5x0/sxgGqpAAAAAElFTkSuQmCC"
        />
        <image
          id="image3_497_10844"
          width="125"
          height="58"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAH0AAAA6CAYAAACd3VbxAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMZJREFUeNrsnQtz0kAUhTfJ8iog2LdI7VhH6/j//5DjjLa1D22hBQrEXT13uOwECBSTEO6ZObNIKWbvt3v3EdgqJRKJRCKRKA/y1vSaJBTmLK6pxc1bcOGu07roMOJxlhqC58RMpRwzHqvQjZs3pxK+sWb2U6iEvdAxPILpuTCiQaQF2mdlAPspxYzHbchMMYu8ILr4onHFuGq8Y1xAZbyEW6q94IFxH+WQNQD+eJwQfKo/B6wRnwLiVkKpU+jxIeLxbPxo3DV+Quz+gtczKqUBfN/40HjPuIZKJVEJAjfCxdLF27LHGsET3EMlR/8ZPNU9QCzKiBN5B52khsdFvDapcZ46io1Fx/jG+Mr4GsCfF0GvAfhH41PjXVQySLjF9lGBe5SPAP1g/Mv4DmUH8KdS2ZqB05BXRnyaiIstG8Z1lK/w81LC2ZE6io3DrfFXPNdDHG1svDg93QL/bPwGrTdIsNWOWU8n4GQL+qfxd/gSzz2iRa8TPAEvIAYW8pFxCz4E/Doz9fQkx3XqKDYGP/DcHeJEQ43SC8b0KipzbPwWrVcnnKqGgEhpfYCefo/U9Q29i2ehdYJ3gduhrm383vjM+ATQm/h5JcUxneLVweMrMJxqfDpGRctsnKonCJ2DHzkm8AfGr1kq9dnvdgH+JWO8xzIfAX9n/Mn4HNBbuIYdBlqzjJj0JG6Ix1WwK7jZRsdo4T6boeqEoVNFdMQSroaKVdjYqZzl3Zgt81aFHiB4TfRwC/wLyjYagru6SWtvI2RcZy4b9RKtPa3KeE6FAtYQNFs28dl+n83mexGbOsuk9RImZsfo2ecAfgrg1YjelOamzEJOWm2OvAUVi5r0DSI2dJYdx6uAa8fuD/CJs4z1Vba2Xudqk6AvAkPLuy6Wc138e8TWrnHAu++7izR+BrfxXHUTgW869Hk9kvf0sTOxG89I994SPXxjgecB+qyxt89SO80DbiJSfhix01Z0lmZ8pn6M/6O0qcDzAj1qls334gNAqmCXqst2p3ij0HgdpfSWM3Fr473LKeyyCfQ5kzxaT5MoA9CW6SV2qB6wzqd1fAGNoo419xHW42fYhOFLszRuogj0mDtnivX+BnbNLtS/mw+32NHr4XVlpG3bw/fZDmQLDaDJ1uL+JgPPG/SoiV3AxvoDwL5B+RtjvALQBqDvsbKJLFFW6X2mQKAvCd5nqbuBXsvv2PGeXlOTu2P0GYJyxE6bEujZH+P57dC6muzY9Z0xvaQmN0oKanorU+UFeJ6hc0j8/kER8N1P2/BPwQQsW+QK9jZAd+HTnj2l/Kh1uspTGt9m6G4DcG/gqLz2aIE+OwNsnXwlEugigS4S6CKBLhLoIoEuEugigS4S6CKBLhLoIoEuEugigS4S6CKBLhLo26g4H5eaefKgKHOKxUoveAN+WiOdPGjlSXwzC504jRi/MA50Ak6nOtlvenbY7wj0bEPvgBkdqjgFXs8BPsAv2u99XQB0kufIiVaDTufIXajJV7MHHLye01rsV3ntNzzp1EF7JlmSJ0aKVpN7YuQ1WA7jQO8AtMIbJHk2rOhlEzn3bNgOgx5m+RRo0ctS/MxToLN+3rtodfBLnffOwWfhLzuI1rxm36S/4SJaHb5o2/VHgAEAKq1w/7wLXkMAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};
