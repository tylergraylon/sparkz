import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function ButtonConnect({ className }: { className: string }) {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
        accountModalOpen,
        chainModalOpen,
        connectModalOpen,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted;
        const connected = ready && account && chain;

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (connectModalOpen) {
                return (
                  <Button
                    className={`${className} w-32 flex justify-center items-center`}
                    type="button"
                  >
                    <Loader />
                  </Button>
                );
              }

              if (!connected) {
                return (
                  <Button
                    className={`${className} w-32 flex justify-center items-center`}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    className={`${className} w-32 flex justify-center items-center`}
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div>
                  {/* <Button
                    className={className}
                    onClick={openChainModal}
                    style={{ display: "flex", alignItems: "center" }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: "hidden",
                          marginRight: 4,
                        }}
                      >
                        {chain.iconUrl && (
                          <img
                            alt={chain.name ?? "Chain icon"}
                            src={chain.iconUrl}
                            style={{ width: 12, height: 12 }}
                          />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </Button> */}

                  <Button
                    className={`${className} flex justify-center items-center space-x-2`}
                    onClick={openAccountModal}
                    type="button"
                  >
                    <span>
                      {account.ensAvatar && (
                        <img
                          src={account.ensAvatar}
                          alt="avatar"
                          className=""
                        />
                      )}
                    </span>
                    <span>{account.displayName}</span>

                    {/* {account.displayBalance
                      ? ` (${account.displayBalance})`
                      : ''} */}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
}

type ButtonProps = {
  className: string;
  onClick: () => void;
  type: "button";
  children: React.ReactNode;
  style: {};
};

const Button = ({
  className,
  onClick,
  type,
  children,
}: Partial<ButtonProps>) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

const Loader = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    className="animate-spin"
    width="30px"
    height="20px"
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
    style={{
      marginRight: "-1.6px",
      display: "block",
      backgroundColor: "transparent",
    }}
  >
    <circle
      cx="50"
      cy="50"
      fill="none"
      stroke="#585872"
      stroke-width="10"
      r="35"
      stroke-dasharray="164.93361431346415 56.97787143782138"
      transform="matrix(1,0,0,1,0,0)"
    ></circle>
  </svg>
);
