import Link from "next/link";

const Logo = ({ ...props }) => {
  return (
    <Link {...props} href={"/"}>
      <svg
        width="106"
        height="16"
        viewBox="0 0 106 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.36 15V0.999999H3.4L7.86 9.88L12.26 0.999999H15.3V15H12.74V5.34L8.84 13H6.82L2.92 5.34V15H0.36ZM22.9263 15.24C21.9262 15.24 21.0396 15.0267 20.2662 14.6C19.4929 14.1733 18.8862 13.5733 18.4462 12.8C18.0062 12.0267 17.7862 11.1333 17.7862 10.12C17.7862 9.09333 17.9996 8.18 18.4262 7.38C18.8662 6.58 19.4662 5.96 20.2262 5.52C20.9996 5.06667 21.9062 4.84 22.9462 4.84C23.9196 4.84 24.7796 5.05333 25.5263 5.48C26.2729 5.90667 26.8529 6.49333 27.2662 7.24C27.6929 7.97333 27.9062 8.79333 27.9062 9.7C27.9062 9.84667 27.8996 10 27.8863 10.16C27.8863 10.32 27.8796 10.4867 27.8663 10.66H20.3262C20.3796 11.4333 20.6462 12.04 21.1262 12.48C21.6196 12.92 22.2129 13.14 22.9062 13.14C23.4262 13.14 23.8596 13.0267 24.2062 12.8C24.5662 12.56 24.8329 12.2533 25.0063 11.88H27.6063C27.4196 12.5067 27.1063 13.08 26.6663 13.6C26.2396 14.1067 25.7063 14.5067 25.0662 14.8C24.4396 15.0933 23.7263 15.24 22.9263 15.24ZM22.9462 6.92C22.3196 6.92 21.7662 7.1 21.2862 7.46C20.8062 7.80667 20.4996 8.34 20.3662 9.06H25.3062C25.2662 8.40667 25.0263 7.88667 24.5863 7.5C24.1462 7.11333 23.5996 6.92 22.9462 6.92ZM34.7694 15.24C33.836 15.24 33.0027 15.0133 32.2694 14.56C31.536 14.1067 30.956 13.4867 30.5294 12.7C30.1027 11.9133 29.8894 11.02 29.8894 10.02C29.8894 9.02 30.1027 8.13333 30.5294 7.36C30.956 6.57333 31.536 5.96 32.2694 5.52C33.0027 5.06667 33.836 4.84 34.7694 4.84C35.516 4.84 36.1694 4.98 36.7294 5.26C37.2894 5.54 37.7427 5.93333 38.0894 6.44V0.599999H40.6494V15H38.3694L38.0894 13.58C37.7694 14.02 37.3427 14.4067 36.8094 14.74C36.2894 15.0733 35.6094 15.24 34.7694 15.24ZM35.3094 13C36.136 13 36.8094 12.7267 37.3294 12.18C37.8627 11.62 38.1294 10.9067 38.1294 10.04C38.1294 9.17333 37.8627 8.46667 37.3294 7.92C36.8094 7.36 36.136 7.08 35.3094 7.08C34.496 7.08 33.8227 7.35333 33.2894 7.9C32.756 8.44667 32.4894 9.15333 32.4894 10.02C32.4894 10.8867 32.756 11.6 33.2894 12.16C33.8227 12.72 34.496 13 35.3094 13ZM44.7863 3.54C44.3196 3.54 43.9329 3.4 43.6263 3.12C43.3329 2.84 43.1863 2.48667 43.1863 2.06C43.1863 1.63333 43.3329 1.28667 43.6263 1.02C43.9329 0.739999 44.3196 0.599999 44.7863 0.599999C45.2529 0.599999 45.6329 0.739999 45.9263 1.02C46.2329 1.28667 46.3863 1.63333 46.3863 2.06C46.3863 2.48667 46.2329 2.84 45.9263 3.12C45.6329 3.4 45.2529 3.54 44.7863 3.54ZM43.5063 15V5.08H46.0663V15H43.5063Z"
          fill="#462255"
        />
        <path
          d="M55.0683 15.24C53.7483 15.24 52.5949 14.94 51.6083 14.34C50.6216 13.74 49.8549 12.9067 49.3083 11.84C48.7616 10.76 48.4883 9.50667 48.4883 8.08C48.4883 6.64 48.7683 5.37333 49.3283 4.28C49.9016 3.17333 50.7083 2.31333 51.7483 1.7C52.8016 1.07333 54.0483 0.76 55.4883 0.76C57.1283 0.76 58.4883 1.15333 59.5683 1.94C60.6483 2.72667 61.3483 3.81333 61.6683 5.2H58.8083C58.5949 4.54667 58.2083 4.04 57.6483 3.68C57.0883 3.30667 56.3683 3.12 55.4883 3.12C54.0883 3.12 53.0083 3.56667 52.2483 4.46C51.4883 5.34 51.1083 6.55333 51.1083 8.1C51.1083 9.64667 51.4816 10.8467 52.2283 11.7C52.9883 12.54 54.0149 12.96 55.3083 12.96C56.5749 12.96 57.5283 12.62 58.1683 11.94C58.8216 11.2467 59.2149 10.34 59.3483 9.22H55.8083V7.3H61.9283V15H59.5683L59.3683 13.16C58.9149 13.8267 58.3483 14.34 57.6683 14.7C56.9883 15.06 56.1216 15.24 55.0683 15.24ZM68.227 15.24C66.987 15.24 66.027 14.8533 65.347 14.08C64.6804 13.3067 64.347 12.1733 64.347 10.68V5.08H66.887V10.44C66.887 11.2933 67.0604 11.9467 67.407 12.4C67.7537 12.8533 68.3004 13.08 69.047 13.08C69.7537 13.08 70.3337 12.8267 70.787 12.32C71.2537 11.8133 71.487 11.1067 71.487 10.2V5.08H74.047V15H71.787L71.587 13.32C71.2804 13.9067 70.8337 14.3733 70.247 14.72C69.6737 15.0667 69.0004 15.24 68.227 15.24ZM78.205 3.54C77.7383 3.54 77.3517 3.4 77.045 3.12C76.7517 2.84 76.605 2.48667 76.605 2.06C76.605 1.63333 76.7517 1.28667 77.045 1.02C77.3517 0.739999 77.7383 0.599999 78.205 0.599999C78.6717 0.599999 79.0517 0.739999 79.345 1.02C79.6517 1.28667 79.805 1.63333 79.805 2.06C79.805 2.48667 79.6517 2.84 79.345 3.12C79.0517 3.4 78.6717 3.54 78.205 3.54ZM76.925 15V5.08H79.485V15H76.925ZM86.867 15.24C85.9337 15.24 85.1004 15.0133 84.367 14.56C83.6337 14.1067 83.0537 13.4867 82.627 12.7C82.2004 11.9133 81.987 11.02 81.987 10.02C81.987 9.02 82.2004 8.13333 82.627 7.36C83.0537 6.57333 83.6337 5.96 84.367 5.52C85.1004 5.06667 85.9337 4.84 86.867 4.84C87.6137 4.84 88.267 4.98 88.827 5.26C89.387 5.54 89.8404 5.93333 90.187 6.44V0.599999H92.747V15H90.467L90.187 13.58C89.867 14.02 89.4404 14.4067 88.907 14.74C88.387 15.0733 87.707 15.24 86.867 15.24ZM87.407 13C88.2337 13 88.907 12.7267 89.427 12.18C89.9604 11.62 90.227 10.9067 90.227 10.04C90.227 9.17333 89.9604 8.46667 89.427 7.92C88.907 7.36 88.2337 7.08 87.407 7.08C86.5937 7.08 85.9204 7.35333 85.387 7.9C84.8537 8.44667 84.587 9.15333 84.587 10.02C84.587 10.8867 84.8537 11.6 85.387 12.16C85.9204 12.72 86.5937 13 87.407 13ZM100.324 15.24C99.3239 15.24 98.4372 15.0267 97.6639 14.6C96.8906 14.1733 96.2839 13.5733 95.8439 12.8C95.4039 12.0267 95.1839 11.1333 95.1839 10.12C95.1839 9.09333 95.3972 8.18 95.8239 7.38C96.2639 6.58 96.8639 5.96 97.6239 5.52C98.3972 5.06667 99.3039 4.84 100.344 4.84C101.317 4.84 102.177 5.05333 102.924 5.48C103.671 5.90667 104.251 6.49333 104.664 7.24C105.091 7.97333 105.304 8.79333 105.304 9.7C105.304 9.84667 105.297 10 105.284 10.16C105.284 10.32 105.277 10.4867 105.264 10.66H97.7239C97.7772 11.4333 98.0439 12.04 98.5239 12.48C99.0172 12.92 99.6106 13.14 100.304 13.14C100.824 13.14 101.257 13.0267 101.604 12.8C101.964 12.56 102.231 12.2533 102.404 11.88H105.004C104.817 12.5067 104.504 13.08 104.064 13.6C103.637 14.1067 103.104 14.5067 102.464 14.8C101.837 15.0933 101.124 15.24 100.324 15.24ZM100.344 6.92C99.7172 6.92 99.1639 7.1 98.6839 7.46C98.2039 7.80667 97.8972 8.34 97.7639 9.06H102.704C102.664 8.40667 102.424 7.88667 101.984 7.5C101.544 7.11333 100.997 6.92 100.344 6.92Z"
          fill="#FC7853"
        />
      </svg>
    </Link>
  );
};

export default Logo;
