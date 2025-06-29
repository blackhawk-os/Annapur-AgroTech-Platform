import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface ToastContentProps {
  icon?: React.ReactNode;
  primary: string;
  secondary?: string;
}

const ToastContent = ({ primary, secondary }: ToastContentProps) => (
  <div className="flex flex-row gap-3 p-2 h-full w-full justify-start items-start">
    <div className="flex flex-col items-start justify-start">
      <div className=" text-[#00C586] text-[16px] font-normal mb-1 font-dm-sans">
        {primary}
      </div>
      {secondary && (
        <div className="text-[13px] text-[#969696] font-normal font-raleway">
          {secondary}
        </div>
      )}
    </div>
  </div>
);

type ToastType =
  | "login"
  | "signup"
  | "otp-sent"
  | "password-change"
  | "order-cancelled"
  | "contact-us"
  | "error"
  | "user-notfound"
  | "logout-success"
  | "cart-added"
  | "order-success";

export const showAuthToast = (
  type: ToastType,
  customMessage?: { primary: string; secondary?: string }
): void => {
  const getToastContent = () => {
    if (customMessage) {
      return (
        <ToastContent
          primary={customMessage.primary}
          secondary={customMessage.secondary}
        />
      );
    }

    switch (type) {
      case "login":
        return <ToastContent primary="Logged in successfully!" />;
      case "signup":
        return (
          <ToastContent
            primary="Account created successfully!"
            secondary="Please log in for security purposes."
          />
        );
      case "otp-sent":
        return (
          <ToastContent
            primary="OTP sent successfully!"
            secondary="Please check your email for the OTP."
          />
        );
      case "password-change":
        return (
          <ToastContent
            primary="Password changed successfully!"
            secondary="Please log in for security purposes."
          />
        );
      case "order-cancelled":
        return <ToastContent primary="Order cancelled successfully!" />;
      case "contact-us":
        return <ToastContent primary="Message sent successfully!" />;
      case "error":
        return (
          <ToastContent
            primary="Something went wrong!"
            secondary="Please try again"
          />
        );
      case "user-notfound":
        return (
          <ToastContent
            primary="User not found!"
            secondary="Please try again"
          />
        );
      case "logout-success":
        return <ToastContent primary="Logged out successfully!" />;

      case "cart-added":
        return (
          <ToastContent
            primary="Item added to cart successfully!"
            secondary="You can view your cart for more details."
          />
        );
      case "order-success":
        return (
          <ToastContent
            primary="Order placed successfully!"
            secondary="You can view your order details in your account."
          />
        );
      default:
        const exhaustiveCheck: never = type;
        throw new Error(`Unhandled toast type: ${exhaustiveCheck}`);
    }
  };

  const toastContent = getToastContent();

  if (type === "error" || type === "user-notfound") {
    toast.error(toastContent);
  } else {
    toast.success(toastContent);
  }
};
