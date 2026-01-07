import React from "react";
import Link from "next/link";

const SignUpFooter = () => {
  return (
    <div className="sign-up__footer">
      <p>
        Already have an account?{" "}
        <Link href="/" style={{ color: "#E26E40" }}>
          {" "}
          Login
        </Link>
      </p>
    </div>
  );
};

export default SignUpFooter;
