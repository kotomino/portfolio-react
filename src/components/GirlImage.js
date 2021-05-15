import React from 'react'
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden', 
    width: "90%",
    height: "90%",
    marginTop: "27%",
    marginLeft: "7%"
  },
})

const GirlImage = (props) => {

  const { classes } = props;

  return (
    <div className={classes.root}>
      <svg width="555" height="384" viewBox="0 0 555 384" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="girl image" clip-path="url(#clip0)">
      <g id="background">
      <path id="Vector" d="M553.48 277.391C553.48 300.159 431.337 384 278.793 384C126.249 384 6.1712 294.653 6.1712 271.885C6.1712 249.117 126.249 301.539 278.793 301.539C431.337 301.539 553.48 254.603 553.48 277.391Z" fill="#29293D"/>
      <path id="Vector_2" d="M554.995 268.303C554.995 268.606 554.995 268.909 554.995 269.217C554.66 278.679 549.524 288.09 540.152 294.735C530.21 301.775 516.878 305.48 503.19 307.845C501.05 308.215 498.899 308.548 496.754 308.872C495.659 309.026 494.569 309.18 493.483 309.323C463.013 313.428 431.902 314.214 400.936 314.968C368.545 315.789 336.124 316.6 303.697 317.02L297.266 317.097C248.067 317.641 198.888 317.185 149.868 314.321C134.655 313.439 119.293 312.269 104.21 310.298C102.059 310.028 99.9156 309.732 97.7785 309.411C77.7747 306.47 58.366 301.96 40.6827 294.637C36.5083 292.928 32.4252 290.992 28.4504 288.839C17.3433 282.789 7.97651 275.138 3.34064 265.748C0.6439 260.242 -0.466407 254.062 0.14003 247.932C0.338373 245.703 0.711315 243.495 1.25524 241.328C2.64952 235.966 4.77599 230.833 7.57144 226.082C14.7928 213.552 25.6399 202.319 34.9916 190.553C54.9554 165.476 67.9579 133.79 49.5344 108.087C44.2484 100.703 36.6069 94.2322 32.3011 86.5095C29.9977 82.3377 28.5606 77.7219 28.0803 72.9525C27.8466 70.7598 27.758 68.5534 27.8153 66.3484C28.0196 61.1994 28.6469 56.0772 29.6906 51.0364C32.6912 35.2729 38.2972 18.2779 55.6105 8.44618C67.4278 1.73436 82.4906 -0.34897 97.7635 0.0461448C99.9072 0.0974584 102.051 0.200085 104.195 0.354025C110.051 0.74914 115.872 1.47779 121.493 2.40657C156.22 8.09724 188.271 19.9866 220.627 30.7214C245.261 38.8905 270.776 46.5311 297.251 50.1744C299.392 50.4669 301.532 50.7388 303.682 50.9749C309.889 51.6727 316.15 52.1346 322.461 52.3244C353.872 53.2481 390.519 46.2694 411.378 28.1455C431.527 10.627 469.314 9.21588 496.739 19.6787L497.149 19.8378C499.213 20.6451 501.213 21.514 503.15 22.4445C523.359 32.1941 536.897 48.8915 538.807 66.3638C539.046 68.5339 539.103 70.7211 538.977 72.9012C538.98 72.9233 538.98 72.9457 538.977 72.9679C537.667 94.4631 520.543 112.515 503.155 130.598C501.005 132.83 498.849 135.062 496.719 137.31C491.078 143.252 485.612 149.24 480.871 155.403C478.706 158.196 476.715 161.127 474.91 164.178C473.251 166.991 471.833 169.948 470.674 173.014C469.451 176.188 468.665 179.521 468.339 182.917C467.851 187.786 468.718 192.696 470.839 197.08L470.884 197.183C475.525 206.624 485.347 213.316 496.719 219.247C498.814 220.346 500.97 221.413 503.155 222.47C515.487 228.443 528.775 233.99 538.877 241.364C541.6 243.307 544.142 245.506 546.468 247.932C547.416 248.938 548.31 249.995 549.149 251.098C552.838 255.88 554.89 261.774 554.99 267.872C554.995 268.026 554.995 268.165 554.995 268.303Z" fill="#F9A826"/>
      <path id="Vector_3" d="M554.995 268.303C554.995 268.606 554.995 268.909 554.995 269.217C554.66 278.679 549.524 288.09 540.152 294.735C530.21 301.775 516.878 305.48 503.19 307.845C501.05 308.215 498.899 308.548 496.754 308.872C495.659 309.026 494.569 309.18 493.483 309.323C463.013 313.428 431.902 314.214 400.936 314.968C368.545 315.789 336.124 316.6 303.697 317.02L297.266 317.097C248.067 317.641 198.888 317.185 149.868 314.321C134.655 313.439 119.293 312.269 104.21 310.298C102.059 310.028 99.9156 309.732 97.7785 309.411C77.7747 306.47 58.366 301.96 40.6827 294.637C36.5083 292.928 32.4252 290.992 28.4504 288.839C17.3433 282.789 7.97651 275.138 3.34064 265.748C0.6439 260.242 -0.466407 254.062 0.14003 247.932C0.338373 245.703 0.711315 243.495 1.25524 241.328C2.64952 235.966 4.77599 230.833 7.57144 226.082C14.7928 213.552 25.6399 202.319 34.9916 190.553C54.9554 165.476 67.9579 133.79 49.5344 108.087C44.2484 100.703 36.6069 94.2322 32.3011 86.5095C29.9977 82.3377 28.5606 77.7219 28.0803 72.9525C27.8466 70.7598 27.758 68.5534 27.8153 66.3484C28.0196 61.1994 28.6469 56.0772 29.6906 51.0364C32.6912 35.2729 38.2972 18.2779 55.6105 8.44618C67.4278 1.73436 82.4906 -0.34897 97.7635 0.0461448C99.9072 0.0974584 102.051 0.200085 104.195 0.354025C110.051 0.74914 115.872 1.47779 121.493 2.40657C156.22 8.09724 188.271 19.9866 220.627 30.7214C245.261 38.8905 270.776 46.5311 297.251 50.1744C299.392 50.4669 301.532 50.7388 303.682 50.9749C309.889 51.6727 316.15 52.1346 322.461 52.3244C353.872 53.2481 390.519 46.2694 411.378 28.1455C431.527 10.627 469.314 9.21588 496.739 19.6787L497.149 19.8378C499.213 20.6451 501.213 21.514 503.15 22.4445C523.359 32.1941 536.897 48.8915 538.807 66.3638C539.046 68.5339 539.103 70.7211 538.977 72.9012C538.98 72.9233 538.98 72.9457 538.977 72.9679C537.667 94.4631 520.543 112.515 503.155 130.598C501.005 132.83 498.849 135.062 496.719 137.31C491.078 143.252 485.612 149.24 480.871 155.403C478.706 158.196 476.715 161.127 474.91 164.178C473.251 166.991 471.833 169.948 470.674 173.014C469.451 176.188 468.665 179.521 468.339 182.917C467.851 187.786 468.718 192.696 470.839 197.08L470.884 197.183C475.525 206.624 485.347 213.316 496.719 219.247C498.814 220.346 500.97 221.413 503.155 222.47C515.487 228.443 528.775 233.99 538.877 241.364C541.6 243.307 544.142 245.506 546.468 247.932C547.416 248.938 548.31 249.995 549.149 251.098C552.838 255.88 554.89 261.774 554.99 267.872C554.995 268.026 554.995 268.165 554.995 268.303Z" fill="url(#paint0_linear)"/>
      <path id="Vector_4" d="M503.175 22.4445V130.593C501.025 132.83 498.869 135.062 496.739 137.31V19.6787L503.175 22.4445Z" fill="#29293D"/>
      <path id="Vector_5" d="M539.002 72.9012C539.005 72.9233 539.005 72.9457 539.002 72.9679H28.0803C27.8468 70.7752 27.7582 68.5688 27.8153 66.3638H538.832C539.071 68.5339 539.128 70.7211 539.002 72.9012Z" fill="#29293D"/>
      <path id="Vector_6" d="M104.195 0.354023V310.288C102.044 310.018 99.9006 309.722 97.7635 309.4V0.0461426C99.9089 0.0871934 102.049 0.200083 104.195 0.354023Z" fill="#29293D"/>
      <path id="Vector_7" d="M303.682 50.9646V317.031L297.251 317.108V50.159C299.392 50.4566 301.535 50.7252 303.682 50.9646Z" fill="#29293D"/>
      <path id="Vector_8" d="M546.468 247.932H0.140015C0.338357 245.703 0.7113 243.495 1.25523 241.328H538.897C541.617 243.281 544.152 245.492 546.468 247.932Z" fill="#29293D"/>
      <path id="Vector_9" d="M496.739 219.227C498.834 220.325 500.99 221.392 503.175 222.449V307.845C501.035 308.215 498.884 308.548 496.739 308.872V219.227Z" fill="#29293D"/>
      </g>
      <g id="girl">
      <path id="Vector_10" d="M365.503 272.858C365.503 272.858 348.344 277.117 341.553 285.086C339.278 287.749 335.902 289.668 332.416 291.038V279.015C336.342 272.252 340.298 264.729 340.298 264.729C340.478 264.36 341.908 259.172 341.908 259.172C345.129 256.576 341.728 247.504 341.728 247.504C341.728 247.504 343.698 241.762 342.623 240.648C341.548 239.534 342.443 236.574 343.338 235.275C344.234 233.977 344.053 232.31 344.053 231.201C344.053 230.093 342.623 228.42 340.298 227.496C337.972 226.573 340.478 225.09 341.908 224.715C343.338 224.341 343.698 220.826 342.088 218.973C340.478 217.121 342.268 216.012 343.158 213.975C344.048 211.938 340.283 212.308 340.283 212.308V193.578C340.283 193.578 339.208 187.467 338.137 176.722C337.067 165.977 332.951 164.868 332.951 164.868C330.747 164.166 328.596 163.298 326.515 162.272C324.325 161.218 322.053 160.351 319.724 159.68C319.724 159.68 314.898 159.68 310.962 158.439C307.026 157.197 304.986 157.11 304.986 157.11L304.341 156.781C299.501 154.256 295.667 150.084 293.494 144.979C293.384 144.722 293.284 144.466 293.184 144.22C294.253 143.018 295.209 141.716 296.039 140.33V140.299C296.039 140.489 296.039 140.679 296.039 140.869C296.039 140.946 296.039 141.028 296.039 141.105C296.039 141.562 296.039 142.018 296.039 142.475V142.521C298.89 137.354 307.162 136.174 307.947 130.273C307.982 130.004 308.001 129.733 308.002 129.462V129.426C308.002 129.231 308.002 129.031 308.002 128.831C307.897 127.183 307.347 125.541 307.242 123.879C307.206 123.402 307.206 122.924 307.242 122.447V122.478C307.612 117.896 310.977 113.909 312.518 109.46C312.932 108.263 313.202 107.019 313.323 105.755V105.719C313.363 105.339 313.388 104.954 313.398 104.57C313.398 104.477 313.398 104.38 313.398 104.287C313.398 104.021 313.398 103.774 313.398 103.487C313.351 101.12 312.832 98.7876 311.873 96.6343C310.914 94.4809 309.535 92.5519 307.822 90.9663C304.971 88.4263 301.205 86.8305 299.23 83.5105C298.31 81.9711 297.86 80.1443 296.855 78.6562C294.964 75.8442 291.494 74.6999 288.208 74.2946C284.922 73.8892 281.547 74.0226 278.406 72.9655C276.176 72.2164 274.155 70.8873 271.905 70.2203C269.453 69.547 266.859 69.6596 264.471 70.5429C262.084 71.4262 260.016 73.038 258.547 75.1618C257.362 76.9372 256.587 79.0616 254.987 80.4471C251.711 83.2898 246.155 82.0583 243.284 85.3321C241.709 87.1332 241.529 89.586 241.719 92.0901C241.719 92.1209 241.719 92.1517 241.719 92.1825C241.719 92.3723 241.754 92.5673 241.774 92.7623C241.774 92.8547 241.774 92.947 241.774 93.0343C241.774 93.1215 241.774 93.2293 241.809 93.3268C241.909 94.2248 242.034 95.1176 242.144 95.9797C242.144 96.1131 242.174 96.2414 242.189 96.3748L242.279 97.1804C242.279 97.3754 242.309 97.5704 242.329 97.7654C242.349 97.9604 242.364 98.2785 242.379 98.494C242.394 98.7096 242.379 98.8738 242.414 99.0688C242.735 105.907 241.322 112.714 238.313 118.824C235.608 124.269 231.587 129.287 230.887 135.368C230.778 136.364 230.751 137.369 230.807 138.37C230.807 138.488 230.807 138.606 230.807 138.724C230.807 138.842 230.837 139.083 230.852 139.263C230.867 139.442 230.892 139.678 230.917 139.884C230.917 140.002 230.947 140.12 230.962 140.238C230.997 140.51 231.037 140.782 231.082 141.059L231.112 141.233C231.822 145.379 233.433 149.443 234.288 153.63C234.608 155.175 234.822 156.74 234.928 158.315C234.925 158.326 234.925 158.336 234.928 158.346C234.958 158.859 234.983 159.347 234.998 159.85C234.998 160.527 234.998 161.209 234.998 161.902C233.64 162.438 232.248 162.876 230.832 163.216C228.332 163.585 220.995 170.256 221.53 171.939C222.065 173.622 218.25 185.281 218.145 185.635L212.144 228.225C212.144 228.225 208.958 231.376 209.953 233.413C210.948 235.45 209.758 238.97 209.758 238.97C209.758 238.97 204.377 241.377 205.572 242.86C206.768 244.343 206.222 247.119 205.402 248.971C204.582 250.823 203.237 254.159 205.402 254.713C207.568 255.267 205.772 262.497 205.772 262.497C205.772 262.497 213.319 261.604 212.774 266.202C212.594 267.665 218.05 271.688 220.325 273.299V295.436C217.269 294.558 213.679 293.419 211.388 292.321C206.743 290.099 180.643 285.84 174.921 298.622C169.2 311.404 182.788 328.446 186.184 330.298C186.184 330.298 189.404 332.889 190.119 334.188C190.834 335.486 194.945 335.855 194.945 335.855C194.945 335.855 199.236 337.908 200.306 339.001C201.096 339.822 207.633 341.951 215.379 343.619C215.379 343.619 209.123 358.397 219.33 357.181C229.537 355.965 234.508 350.808 241.704 350.808C244.58 350.808 249.921 350.392 255.297 349.9C256.647 350.145 257.983 350.469 259.297 350.87C262.326 351.847 265.437 352.534 268.589 352.922C268.589 352.922 276.636 357.366 280.927 356.252C281.28 356.15 281.61 355.976 281.897 355.739H281.997C282.777 355.539 283.662 354.713 284.582 353.466C289.948 354.03 296.084 354.831 298.365 355.744C302.811 357.504 334.612 355.067 334.612 355.067C334.612 355.067 355.156 355.483 361.042 357.309C366.928 359.136 364.837 338.657 353.975 336.353C351.076 335.756 348.126 335.457 345.169 335.46C345.921 334.664 346.609 333.806 347.224 332.894C351.135 332.53 353.725 332.304 353.725 332.304C353.725 332.304 364.092 327.116 369.993 323.966C373.761 321.863 377.145 319.106 379.995 315.817C379.995 315.817 385.176 312.482 387.322 311.199C389.467 309.916 390.537 305.642 390.537 305.642C406.795 267.849 365.503 272.858 365.503 272.858ZM318.954 225.454C318.954 224.833 318.954 224.207 318.954 223.586C319.534 224.007 319.449 224.669 318.954 225.449V225.454ZM319.124 238.554C319.559 239.139 319.979 239.673 320.279 240.094C321.434 241.633 319.344 242.352 319.494 244.902C319.529 245.471 319.579 246.267 319.629 247.149C319.409 243.47 319.229 240.443 319.124 238.549V238.554Z" fill="url(#paint1_linear)"/>
      <path id="Vector_11" d="M218.301 302.873C218.301 302.873 208.299 300.487 203.644 298.286C198.988 296.084 172.898 291.866 167.177 304.526C161.456 317.185 175.043 334.051 178.439 335.888C181.834 337.725 214.906 312.587 214.906 312.587L240.991 323.876L245.992 306.357L218.301 302.873Z" fill="#22448B"/>
      <path id="Vector_12" d="M324.476 306.357H247.757C237.585 306.357 229.338 314.819 229.338 325.256V327.991C229.338 338.429 237.585 346.89 247.757 346.89H324.476C334.649 346.89 342.895 338.429 342.895 327.991V325.256C342.895 314.819 334.649 306.357 324.476 306.357Z" fill="#22448B"/>
      <path id="Vector_13" d="M281.068 327.806C281.068 327.806 269.681 330.808 260.389 330.675C251.097 330.541 207.634 349.071 207.634 349.071C207.634 349.071 201.378 363.705 211.585 362.494C221.792 361.283 226.763 356.203 233.959 356.203C241.156 356.203 263.795 353.638 263.795 353.638L285.579 337.125L281.068 327.806Z" fill="#FBBEBE"/>
      <path id="Vector_14" d="M288.195 189.706L267.771 193.837L266.445 194.109C266.445 194.109 250.297 189.706 249.762 189.337C249.227 188.967 234.569 168.704 234.569 168.704C234.569 168.704 241.981 168.786 247.802 165.343C248.012 165.219 248.217 165.086 248.422 164.958C250.982 163.374 252.926 160.927 253.923 158.036C254.028 157.733 254.118 157.42 254.203 157.091C254.823 154.639 254.863 151.668 254.033 148.07C252.033 139.516 256.634 137.161 262.73 137.366C271.536 137.664 283.524 143.303 283.524 143.303C283.679 146.182 284.317 149.011 285.409 151.668C285.504 151.914 285.609 152.181 285.719 152.417C287.906 157.481 291.74 161.608 296.566 164.091L297.211 164.419C297.861 164.737 298.546 165.04 299.257 165.312C314.83 171.367 288.195 189.706 288.195 189.706Z" fill="#FBBEBE"/>
      <path id="Vector_15" opacity="0.1" d="M285.739 152.417C281.855 156.929 276.586 159.945 270.805 160.967C265.023 161.988 259.074 160.954 253.943 158.036C254.823 155.408 254.988 152.14 254.053 148.07C249.227 127.16 283.559 143.303 283.559 143.303C283.728 146.454 284.467 149.544 285.739 152.417Z" fill="black"/>
      <path id="Vector_16" d="M292.185 133.841C292.194 138.783 290.842 143.626 288.285 147.814C287.452 149.187 286.496 150.477 285.429 151.668C280.925 156.733 274.668 159.791 267.996 160.186C267.496 160.222 266.961 160.237 266.44 160.237C261.35 160.237 256.373 158.688 252.14 155.786C247.907 152.884 244.608 148.759 242.66 143.933C240.712 139.107 240.202 133.797 241.195 128.673C242.188 123.55 244.64 118.844 248.24 115.15C251.839 111.457 256.426 108.941 261.419 107.922C266.412 106.903 271.587 107.426 276.291 109.425C280.994 111.424 285.014 114.809 287.842 119.153C290.671 123.496 292.18 128.602 292.18 133.826L292.185 133.841Z" fill="#FBBEBE"/>
      <path id="Vector_17" opacity="0.1" d="M288.195 189.706L267.771 193.837L266.445 194.109C266.445 194.109 250.297 189.706 249.762 189.337C249.227 188.967 234.569 168.704 234.569 168.704C234.569 168.704 241.981 168.786 247.802 165.343C248.012 165.219 248.217 165.086 248.422 164.958C250.272 167.01 256.328 172.814 265.845 172.773C267.067 172.773 268.287 172.682 269.496 172.501C272.367 172.049 275.262 171.757 278.153 171.475C283.689 170.879 292.155 169.155 296.601 164.137L297.246 164.465C297.896 164.783 298.581 165.086 299.292 165.358C314.83 171.367 288.195 189.706 288.195 189.706Z" fill="black"/>
      <path id="Vector_18" d="M311.254 243.262C311.429 247.301 314.294 292.785 314.294 292.785H225.093L225.698 264.147L226.198 241.241L226.358 233.723L227.073 207.681L224.487 205.342L210.435 192.636C210.54 192.298 214.351 180.706 213.82 179.074C213.29 177.442 220.617 170.823 223.122 170.453C224.546 170.114 225.946 169.677 227.313 169.145C231.529 167.606 237.155 165.389 237.775 165.738C238.65 166.22 247.422 165.384 247.777 165.348C247.777 165.348 254.248 173.933 265.81 173.881C267.028 173.875 268.243 173.775 269.446 173.584C272.317 173.132 275.212 172.84 278.103 172.532C283.919 171.911 292.96 170.038 297.196 164.424C297.196 164.424 299.242 164.511 303.172 165.738C307.103 166.964 311.934 166.969 311.934 166.969C314.262 167.634 316.533 168.492 318.725 169.535C320.807 170.549 322.958 171.407 325.162 172.101C325.162 172.101 329.272 173.199 330.348 183.836C331.423 194.473 332.508 200.528 332.508 200.528L311.254 219.417C311.254 219.417 311.079 239.208 311.254 243.262Z" fill="#F9A826"/>
      <path id="Vector_19" d="M210.44 274.995L213.565 280.131L225.273 284.364L233.319 269.309L225.903 264.173L214.015 259.405L207.224 263.439L210.44 274.995Z" fill="#FBBEBE"/>
      <path id="Vector_20" d="M310.359 300.302C310.359 300.302 326.982 299.02 333.778 291.133C340.574 283.246 357.728 279.028 357.728 279.028C357.728 279.028 399.021 274.076 382.732 311.494C382.732 311.494 381.662 315.712 379.517 316.995C377.371 318.278 372.19 321.582 372.19 321.582L308.763 315.897L310.359 300.302Z" fill="#22448B"/>
      <path id="Vector_21" opacity="0.1" d="M342.895 326.621C342.899 330.608 341.754 334.507 339.604 337.828C328.932 338.798 305.298 341.076 300.352 342.492C294.276 344.222 281.978 341.21 280.633 340.871L280.508 340.84C280.508 340.84 278.138 333.461 277.007 328.74C276.507 326.595 276.242 325 276.572 324.882C277.648 324.517 287.479 321.762 287.299 323.342C287.119 324.923 316.805 311.509 316.805 311.509L317.715 323.25C320.731 326.79 342.895 321.526 342.895 326.621Z" fill="black"/>
      <path id="Vector_22" d="M373.461 316.81L372.21 321.582C369.355 324.843 365.971 327.572 362.209 329.649C356.307 332.768 345.94 337.905 345.94 337.905C345.94 337.905 307.868 341.204 301.432 343.036C294.996 344.868 281.588 341.384 281.588 341.384C281.588 341.384 276.587 325.795 277.658 325.426C278.728 325.056 288.56 322.311 288.385 323.886C288.21 325.461 317.89 312.053 317.89 312.053L373.461 316.81Z" fill="#22448B"/>
      <path id="Vector_23" d="M267.456 357.933C267.456 357.933 286.169 359.272 290.62 361.011C295.071 362.751 326.867 360.344 326.867 360.344C326.867 360.344 347.411 360.755 353.297 362.561C359.183 364.367 357.093 344.088 346.23 341.815C335.368 339.542 320.061 342.888 320.061 342.888C320.061 342.888 302.787 340.604 300.692 340.322C298.596 340.04 284.799 340.45 284.799 340.45L267.456 357.933Z" fill="#FBBEBE"/>
      <path id="Vector_24" opacity="0.1" d="M193.917 307.312C193.917 307.312 218.651 309.595 225.453 313.757L193.917 307.312Z" fill="black"/>
      <path id="Vector_25" opacity="0.1" d="M348.196 288.613C348.196 288.613 328.827 293.447 321.236 300.559L348.196 288.613Z" fill="black"/>
      <path id="Vector_26" opacity="0.1" d="M195.357 302.052C195.752 302.186 206.744 303.663 206.479 304.736C206.214 305.808 195.357 302.052 195.357 302.052Z" fill="black"/>
      <path id="Vector_27" opacity="0.1" d="M178.084 329.833L179.514 335.339C179.514 335.339 182.73 337.905 183.445 339.188C184.16 340.471 188.271 340.84 188.271 340.84C188.271 340.84 192.561 342.857 193.637 343.955C194.712 345.053 206.324 348.542 217.231 350.01C228.138 351.477 248.332 354.228 252.623 355.695C255.655 356.66 258.767 357.335 261.92 357.712C261.92 357.712 269.961 362.115 274.252 361.017C278.543 359.919 285.869 339.922 285.869 339.922C285.869 339.922 257.629 333.138 256.734 330.937C255.838 328.735 228.668 318.467 228.668 318.467L212.58 318.857L178.084 329.833Z" fill="black"/>
      <path id="Vector_28" d="M177.008 330.382L178.439 335.888C178.439 335.888 181.659 338.454 182.375 339.737C183.09 341.02 187.2 341.389 187.2 341.389C187.2 341.389 191.491 343.406 192.561 344.509C193.632 345.612 205.254 349.091 216.156 350.559C227.058 352.026 247.262 354.777 251.553 356.244C254.583 357.206 257.693 357.88 260.844 358.256C260.844 358.256 268.891 362.654 273.182 361.555C277.472 360.457 284.799 340.46 284.799 340.46C284.799 340.46 256.554 333.677 255.663 331.475C254.773 329.274 214.906 312.587 214.906 312.587L202.403 309.652L177.008 330.382Z" fill="#22448B"/>
      <path id="Vector_29" d="M213.56 190.804L210.435 192.641L204.434 234.826C204.434 234.826 201.248 237.946 202.243 239.958C203.238 241.969 202.048 245.459 202.048 245.459C202.048 245.459 196.667 247.845 197.862 249.312C199.058 250.78 198.513 253.53 197.692 255.362C196.872 257.194 195.527 260.493 197.692 261.048C199.858 261.602 198.062 268.745 198.062 268.745C198.062 268.745 205.609 267.862 205.064 272.408C204.839 274.245 213.595 280.105 213.595 280.105C213.595 280.105 203.644 261.581 225.938 264.147L227.853 253.705C227.853 253.705 229.768 247.824 227.853 246.008C225.938 244.191 228.283 235.463 228.283 235.463L228.703 197.588L213.56 190.804Z" fill="#F9A826"/>
      <path id="Vector_30" opacity="0.1" d="M208.704 245.284C209.1 245.956 221.137 247.337 221.922 249.528C222.707 251.719 208.704 245.284 208.704 245.284Z" fill="black"/>
      <path id="Vector_31" opacity="0.1" d="M204.909 255.757C204.909 255.757 206.544 250.518 210.41 251.457C214.276 252.396 204.909 255.757 204.909 255.757Z" fill="black"/>
      <path id="Vector_32" opacity="0.1" d="M202.818 263.408C202.818 263.408 205.694 256.424 209.62 256.963C213.545 257.502 202.818 263.408 202.818 263.408Z" fill="black"/>
      <path id="Vector_33" d="M333.778 263.254L332.523 270.951C332.523 270.951 319.655 295.166 317.33 295.53C315.005 295.895 302.327 279.392 302.327 279.392L298.932 263.249L312.299 260.647L318.235 254.628C318.235 254.628 333.238 256.101 333.778 263.254Z" fill="#FBBEBE"/>
      <path id="Vector_34" d="M327.697 197.044L332.523 200.528V219.052C332.523 219.052 336.279 218.683 335.383 220.705C334.488 222.727 332.703 223.82 334.313 225.657C335.924 227.494 335.564 230.973 334.133 231.342C332.703 231.712 330.203 233.174 332.523 234.093C334.843 235.011 336.279 236.658 336.279 237.761C336.279 238.865 336.459 240.512 335.564 241.795C334.668 243.077 333.778 246.013 334.848 247.116C335.919 248.219 333.953 253.9 333.953 253.9C333.953 253.9 337.354 262.89 334.133 265.455C334.133 265.455 332.703 270.587 332.523 270.956C332.523 270.956 334.778 253.104 312.289 260.652C312.289 260.652 311.874 253.848 311.719 251.329C311.564 248.809 313.659 248.07 312.504 246.567C311.349 245.063 308.458 241.61 309.824 240.697C311.189 239.783 310.719 238.131 310.179 236.843C309.639 235.555 307.753 235.56 309.464 234C311.174 232.44 312.189 230.978 311.184 230.244C310.179 229.51 308.433 227.119 309.824 226.021C311.214 224.923 311.254 208.964 311.254 208.964C311.254 208.964 316.975 185.488 327.697 197.044Z" fill="#F9A826"/>
      <path id="Vector_35" opacity="0.1" d="M325.427 228.602C325.427 228.602 332.298 226.688 332.523 228.602C332.748 230.516 325.427 228.602 325.427 228.602Z" fill="black"/>
      <path id="Vector_36" opacity="0.1" d="M317.705 233.872C317.705 233.872 327.127 231.455 328.302 233.333C329.477 235.211 317.705 233.872 317.705 233.872Z" fill="black"/>
      <path id="Vector_37" opacity="0.1" d="M315.61 238.972C315.61 238.972 329.742 236.956 330.658 239.911C331.573 242.867 315.61 238.972 315.61 238.972Z" fill="black"/>
      <path id="Vector_38" opacity="0.1" d="M317.705 245.284C318.23 245.417 331.313 246.356 331.573 248.907C331.833 251.457 317.705 245.284 317.705 245.284Z" fill="black"/>
      <path id="Vector_39" d="M319.41 253.551H217.821C214.929 253.551 212.585 255.956 212.585 258.923V313.485C212.585 316.452 214.929 318.857 217.821 318.857H319.41C322.302 318.857 324.646 316.452 324.646 313.485V258.923C324.646 255.956 322.302 253.551 319.41 253.551Z" fill="#3F3D56"/>
      <path id="Vector_40" d="M268.616 290.445C270.897 290.445 272.747 288.547 272.747 286.207C272.747 283.866 270.897 281.968 268.616 281.968C266.334 281.968 264.485 283.866 264.485 286.207C264.485 288.547 266.334 290.445 268.616 290.445Z" fill="#E7EFFD"/>
      <path id="Vector_41" opacity="0.1" d="M231.349 213.521C231.349 213.521 242.091 221.947 250.397 215.527C250.397 215.527 236.355 216.836 231.349 213.521Z" fill="black"/>
      <path id="Vector_42" opacity="0.1" d="M285.739 215.789C285.739 215.789 296.476 224.21 304.783 217.79C304.783 217.79 290.745 219.104 285.739 215.789Z" fill="black"/>
      <path id="Vector_43" d="M262.09 137.095C260.91 141.621 258.224 146.798 261.005 150.513C262.94 153.079 267.101 153.987 267.656 157.184C268.101 159.75 265.896 161.864 265.006 164.276C262.885 170.038 268.416 175.703 269.256 181.805C270.172 188.424 265.471 194.453 264.536 201.068C263.67 207.164 265.851 214.209 262.11 219.027C261.732 219.612 261.144 220.02 260.475 220.161C258.079 220.423 258.474 216.005 256.559 214.517C256.764 217.083 256.959 219.761 256.059 222.163C255.159 224.564 252.788 226.601 250.308 226.201L249.453 220.433C247.765 222.139 245.734 223.444 243.502 224.256C244.38 218.131 246.494 212.26 249.708 207.02C243.412 210.13 239.746 216.862 236.47 223.189C234.425 227.145 232.314 231.471 233.025 235.889C233.315 237.69 234.07 239.399 234.235 241.215C234.4 243.032 233.76 245.141 232.114 245.834C230.614 246.475 228.799 245.623 227.789 244.294C226.778 242.965 226.388 241.272 226.023 239.635C224.313 231.979 222.718 224.077 223.963 216.328C224.413 213.532 225.233 210.761 225.133 207.933C224.918 201.74 220.462 196.644 218.292 190.882C217.447 188.639 217.037 185.848 218.592 184.052C219.392 183.123 220.592 182.656 221.592 182C224.698 179.916 226.093 175.975 226.663 172.209C227.278 168.137 227.164 163.985 226.328 159.955C225.073 153.926 222.192 148.035 222.908 141.913C223.608 135.889 227.629 130.922 230.334 125.529C233.815 118.549 235.15 110.649 234.165 102.874C233.7 99.2564 232.885 95.0692 235.275 92.3649C238.146 89.1219 243.702 90.3432 246.977 87.5312C248.577 86.1611 249.353 84.0522 250.538 82.2972C252.019 80.189 254.089 78.592 256.475 77.7178C258.86 76.8437 261.448 76.7335 263.895 77.4019C266.146 78.0639 268.166 79.3775 270.397 80.1215C273.537 81.1478 276.898 81.0349 280.198 81.4403C283.499 81.8457 286.955 82.9797 288.845 85.7558C289.845 87.2336 290.3 89.0347 291.221 90.5638C293.196 93.8479 296.962 95.4284 299.812 97.9479C302.257 100.184 304.005 103.11 304.839 106.359C305.674 109.609 305.557 113.039 304.503 116.221C302.803 121.08 298.867 125.38 299.202 130.532C299.337 132.651 300.202 134.729 299.932 136.828C299.142 142.673 290.875 143.838 288.02 148.959C288.25 140.564 286.68 131.917 282.214 124.882C278.643 119.238 267.786 109.386 260.325 112.131C259.545 112.426 258.844 112.905 258.277 113.528C257.711 114.152 257.296 114.904 257.064 115.723C256.324 118.602 258.489 119.828 259.88 122.101C261.211 124.32 262.092 126.791 262.472 129.367C262.852 131.943 262.722 134.572 262.09 137.095Z" fill="#3F3D56"/>
      </g>
      <g id="stars2">
      <path id="Vector_44" d="M322.436 62.8591C323.472 62.8591 324.311 61.9976 324.311 60.9349C324.311 59.8721 323.472 59.0106 322.436 59.0106C321.4 59.0106 320.561 59.8721 320.561 60.9349C320.561 61.9976 321.4 62.8591 322.436 62.8591Z" fill="#E7EFFD"/>
      <path id="Vector_45" d="M146.403 152.658C147.438 152.658 148.278 151.796 148.278 150.734C148.278 149.671 147.438 148.809 146.403 148.809C145.367 148.809 144.527 149.671 144.527 150.734C144.527 151.796 145.367 152.658 146.403 152.658Z" fill="#E7EFFD"/>
      <path id="Vector_46" d="M60.6215 34.9189C61.6572 34.9189 62.4968 34.0574 62.4968 32.9946C62.4968 31.9319 61.6572 31.0704 60.6215 31.0704C59.5857 31.0704 58.7461 31.9319 58.7461 32.9946C58.7461 34.0574 59.5857 34.9189 60.6215 34.9189Z" fill="#E7EFFD"/>
      <path id="Vector_47" d="M336.869 89.9116C337.313 89.9116 337.674 89.5418 337.674 89.0855C337.674 88.6292 337.313 88.2593 336.869 88.2593C336.424 88.2593 336.064 88.6292 336.064 89.0855C336.064 89.5418 336.424 89.9116 336.869 89.9116Z" fill="#E7EFFD"/>
      <path id="Vector_48" d="M80.7353 93.4523C81.1799 93.4523 81.5404 93.0824 81.5404 92.6261C81.5404 92.1699 81.1799 91.8 80.7353 91.8C80.2906 91.8 79.9301 92.1699 79.9301 92.6261C79.9301 93.0824 80.2906 93.4523 80.7353 93.4523Z" fill="#E7EFFD"/>
      <path id="Vector_49" d="M452.09 49.846C452.535 49.846 452.896 49.4761 452.896 49.0199C452.896 48.5636 452.535 48.1937 452.09 48.1937C451.646 48.1937 451.285 48.5636 451.285 49.0199C451.285 49.4761 451.646 49.846 452.09 49.846Z" fill="#E7EFFD"/>
      <path id="Vector_50" d="M227.348 41.1638C227.793 41.1638 228.153 40.7939 228.153 40.3376C228.153 39.8814 227.793 39.5115 227.348 39.5115C226.903 39.5115 226.543 39.8814 226.543 40.3376C226.543 40.7939 226.903 41.1638 227.348 41.1638Z" fill="#E7EFFD"/>
      <path id="Vector_51" d="M513.762 51.4316C514.207 51.4316 514.567 51.0617 514.567 50.6054C514.567 50.1492 514.207 49.7793 513.762 49.7793C513.317 49.7793 512.957 50.1492 512.957 50.6054C512.957 51.0617 513.317 51.4316 513.762 51.4316Z" fill="#E7EFFD"/>
      <path id="Vector_52" d="M131.705 180.347H130.475V179.084H130.255V180.347H129.024V180.572H130.255V181.835H130.475V180.572H131.705V180.347Z" fill="#E7EFFD"/>
      <path id="Vector_53" d="M174.713 183.426H173.483V182.163H173.258V183.426H172.033V183.651H173.258V184.914H173.483V183.651H174.713V183.426Z" fill="#E7EFFD"/>
      <path id="Vector_54" d="M195.962 168.088C196.407 168.088 196.767 167.718 196.767 167.262C196.767 166.805 196.407 166.436 195.962 166.436C195.517 166.436 195.157 166.805 195.157 167.262C195.157 167.718 195.517 168.088 195.962 168.088Z" fill="#E7EFFD"/>
      <path id="Vector_55" d="M441.388 221.788C441.833 221.788 442.194 221.418 442.194 220.961C442.194 220.505 441.833 220.135 441.388 220.135C440.944 220.135 440.583 220.505 440.583 220.961C440.583 221.418 440.944 221.788 441.388 221.788Z" fill="#E7EFFD"/>
      <path id="Vector_56" d="M387.378 168.935C387.823 168.935 388.183 168.565 388.183 168.108C388.183 167.652 387.823 167.282 387.378 167.282C386.934 167.282 386.573 167.652 386.573 168.108C386.573 168.565 386.934 168.935 387.378 168.935Z" fill="#E7EFFD"/>
      <path id="Vector_57" d="M460.492 133.405C460.937 133.405 461.297 133.035 461.297 132.579C461.297 132.123 460.937 131.753 460.492 131.753C460.047 131.753 459.687 132.123 459.687 132.579C459.687 133.035 460.047 133.405 460.492 133.405Z" fill="#E7EFFD"/>
      <path id="Vector_58" d="M381.377 129.936C381.822 129.936 382.182 129.566 382.182 129.11C382.182 128.654 381.822 128.284 381.377 128.284C380.932 128.284 380.572 128.654 380.572 129.11C380.572 129.566 380.932 129.936 381.377 129.936Z" fill="#E7EFFD"/>
      </g>
      <g id="stars1">
      <path id="Vector_59" d="M120.683 38.7725C121.719 38.7725 122.558 37.911 122.558 36.8483C122.558 35.7855 121.719 34.924 120.683 34.924C119.647 34.924 118.807 35.7855 118.807 36.8483C118.807 37.911 119.647 38.7725 120.683 38.7725Z" fill="#E7EFFD"/>
      <path id="Vector_60" d="M424.955 135.211C425.991 135.211 426.831 134.35 426.831 133.287C426.831 132.224 425.991 131.363 424.955 131.363C423.92 131.363 423.08 132.224 423.08 133.287C423.08 134.35 423.92 135.211 424.955 135.211Z" fill="#E7EFFD"/>
      <path id="Vector_61" d="M354.442 187.551C355.478 187.551 356.317 186.69 356.317 185.627C356.317 184.564 355.478 183.703 354.442 183.703C353.406 183.703 352.567 184.564 352.567 185.627C352.567 186.69 353.406 187.551 354.442 187.551Z" fill="#E7EFFD"/>
      <path id="Vector_62" d="M60.3864 200.893C61.4221 200.893 62.2618 200.031 62.2618 198.968C62.2618 197.906 61.4221 197.044 60.3864 197.044C59.3507 197.044 58.511 197.906 58.511 198.968C58.511 200.031 59.3507 200.893 60.3864 200.893Z" fill="#E7EFFD"/>
      <path id="Vector_63" d="M81.5354 35.7502C81.9801 35.7502 82.3405 35.3803 82.3405 34.924C82.3405 34.4678 81.9801 34.0979 81.5354 34.0979C81.0907 34.0979 80.7302 34.4678 80.7302 34.924C80.7302 35.3803 81.0907 35.7502 81.5354 35.7502Z" fill="#E7EFFD"/>
      <path id="Vector_64" d="M91.8224 130.449C92.267 130.449 92.6275 130.08 92.6275 129.623C92.6275 129.167 92.267 128.797 91.8224 128.797C91.3777 128.797 91.0172 129.167 91.0172 129.623C91.0172 130.08 91.3777 130.449 91.8224 130.449Z" fill="#E7EFFD"/>
      <path id="Vector_65" d="M179.404 50.6055C179.849 50.6055 180.209 50.2356 180.209 49.7793C180.209 49.3231 179.849 48.9532 179.404 48.9532C178.959 48.9532 178.599 49.3231 178.599 49.7793C178.599 50.2356 178.959 50.6055 179.404 50.6055Z" fill="#E7EFFD"/>
      <path id="Vector_66" d="M412.408 48.9531C412.853 48.9531 413.213 48.5833 413.213 48.127C413.213 47.6707 412.853 47.3008 412.408 47.3008C411.963 47.3008 411.603 47.6707 411.603 48.127C411.603 48.5833 411.963 48.9531 412.408 48.9531Z" fill="#E7EFFD"/>
      <path id="Vector_67" d="M168.697 117.924H167.467V116.661H167.247V117.924H166.016V118.15H167.247V119.412H167.467V118.15H168.697V117.924Z" fill="#E7EFFD"/>
      <path id="Vector_68" d="M424.385 91.6871H423.155V90.4248H422.93V91.6871H421.705V91.9129H422.93V93.1752H423.155V91.9129H424.385V91.6871Z" fill="#E7EFFD"/>
      <path id="Vector_69" d="M197.837 86.5814H196.607V85.3191H196.382V86.5814H195.157V86.8123H196.382V88.0695H196.607V86.8123H197.837V86.5814Z" fill="#E7EFFD"/>
      <path id="Vector_70" d="M379.582 94.2785C380.026 94.2785 380.387 93.9086 380.387 93.4523C380.387 92.996 380.026 92.6262 379.582 92.6262C379.137 92.6262 378.777 92.996 378.777 93.4523C378.777 93.9086 379.137 94.2785 379.582 94.2785Z" fill="#E7EFFD"/>
      <path id="Vector_71" d="M381.377 129.936C381.822 129.936 382.182 129.566 382.182 129.11C382.182 128.654 381.822 128.284 381.377 128.284C380.932 128.284 380.572 128.654 380.572 129.11C380.572 129.566 380.932 129.936 381.377 129.936Z" fill="#E7EFFD"/>
      <path id="Vector_72" d="M333.778 140.491C334.223 140.491 334.583 140.122 334.583 139.665C334.583 139.209 334.223 138.839 333.778 138.839C333.333 138.839 332.973 139.209 332.973 139.665C332.973 140.122 333.333 140.491 333.778 140.491Z" fill="#E7EFFD"/>
      <path id="Vector_73" d="M141.867 37.6745C142.311 37.6745 142.672 37.3046 142.672 36.8483C142.672 36.392 142.311 36.0222 141.867 36.0222C141.422 36.0222 141.062 36.392 141.062 36.8483C141.062 37.3046 141.422 37.6745 141.867 37.6745Z" fill="#E7EFFD"/>
      </g>
      </g>
      <defs>
      <linearGradient id="paint0_linear" x1="277.498" y1="317.308" x2="277.555" y2="51.3136" gradientUnits="userSpaceOnUse">
      <stop stop-color="#DEDEDE" stop-opacity="0.4"/>
      <stop offset="0.489583" stop-color="#2B2B2B" stop-opacity="0.5"/>
      <stop offset="1" stop-opacity="0.87"/>
      </linearGradient>
      <linearGradient id="paint1_linear" x1="283.947" y1="357.335" x2="283.947" y2="69.7584" gradientUnits="userSpaceOnUse">
      <stop stop-color="#808080" stop-opacity="0.25"/>
      <stop offset="0.54" stop-color="#808080" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#808080" stop-opacity="0.1"/>
      </linearGradient>
      <clipPath id="clip0">
      <rect width="555" height="384" fill="white"/>
      </clipPath>
      </defs>
      </svg>
    </div>
  )
}

export default withStyles(styles)(GirlImage);
