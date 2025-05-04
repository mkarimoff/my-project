import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FormContainer,
  SectionTitle,
  Input,
  Row,
  ButtonPrimary,
  ButtonSecondary,
  CheckboxContainer,
  StyledCheckbox,
  StyledLabel,
} from "./order-style";
import { useAuth } from "../../context/authContext";
import { toast } from "react-toastify";

const CheckoutForm: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    number: "",
    apartment: "",
    zip: "",
    town: "",
    country: "",
  });

  useEffect(() => {
    if (user) {
      setFormData((prev) => ({
        ...prev,
        email: user.email || "",
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        address: user.address || "",
        number: user.number || "",
      }));
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  if (!user) {
    return (
      <FormContainer style={{ textAlign: "center", padding: "2rem" }}>
        <h2>You need to sign in to place an order.</h2>
        <p>
          Do you already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            style={{
              color: "#0070f3",
              cursor: "pointer",
              textDecoration: "underline",
              fontWeight: "bold",
            }}
          >
            Sign In
          </span>
        </p>
      </FormContainer>
    );
  }

  return (
    <FormContainer>
      <Row style={{ justifyContent: "space-between", alignItems: "center" }}>
        <SectionTitle>Contact information</SectionTitle>
      </Row>

      <Input
        type="email"
        name="email"
        value={formData.email}
        readOnly
        placeholder="Email"
      />

      <SectionTitle>Delivery Address</SectionTitle>

      <Input
        name="country"
        value={formData.country}
        onChange={handleChange}
        placeholder="Country/Area"
      />

      <Row>
        <Input
          name="firstName"
          value={formData.firstName}
          readOnly
          placeholder="First Name"
        />
        <Input
          name="lastName"
          value={formData.lastName}
          readOnly
          placeholder="Last Name"
        />
      </Row>
      <Input
        name="address"
        value={formData.address}
        readOnly
        placeholder="Street and house number"
      />
      <Input
        name="apartment"
        value={formData.apartment}
        onChange={handleChange}
        placeholder="Apartment, floor, etc. (optional)"
      />
      <Row>
        <Input
          name="zip"
          value={formData.zip}
          onChange={handleChange}
          placeholder="Zip Code"
        />
        <Input
          name="town"
          value={formData.town}
          onChange={handleChange}
          placeholder="Town"
        />
      </Row>
      <Input
        name="number"
        value={formData.number}
        readOnly
        placeholder="Telephone"
      />

      <CheckboxContainer>
        <StyledCheckbox type="checkbox" id="save-info" defaultChecked />
        <StyledLabel htmlFor="save-info">
          Save this information for faster check-out next time
        </StyledLabel>
      </CheckboxContainer>

      <Row style={{ marginTop: "1rem" }}>
        <ButtonPrimary
          onClick={() => {
            toast.success("Order placed successfully!");
            setTimeout(() => navigate("/home"), 1000);
          }}
        >
          Proceed To Delivery
        </ButtonPrimary>
        <ButtonSecondary onClick={() => navigate("/cart")}>
          Return to cart
        </ButtonSecondary>
      </Row>
    </FormContainer>
  );
};

export default CheckoutForm;

