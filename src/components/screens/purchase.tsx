import { Formik } from "formik";
import IconButton from "../icon-button";
import LockIcon from "../icons/lock-icon";
import { Input } from "../input";
import PageWrapper from "../page-wrapper";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { RiVisaLine } from "react-icons/ri";
import { AiFillQuestionCircle } from "react-icons/ai";
import { formatCardNumber, formatDate } from "../../utils";

function limitLength(oldValue: string, value: string, maxLength: number) {
  return value.length > maxLength ? oldValue : value;
}

const validationSchema = Yup.object({
  cardNumber: Yup.string()
    .required("Card number is required")
    .length(19, "Should have 16 digits"),
  nameOnCard: Yup.string().required("Name on card is required"),
  expirationDate: Yup.string().required("Expiration date is required"),
  securityCode: Yup.string()
    .required("Security code is required")
    .length(3, "Should have 3 digits"),
});

export default function Purchase() {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <Formik
        initialValues={{
          cardNumber: "",
          nameOnCard: "",
          expirationDate: "",
          securityCode: "",
        }}
        validateOnBlur={false}
        onSubmit={() => {
          navigate("/payment-processing");
        }}
        validationSchema={validationSchema}
      >
        {({
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="min-h-screen bg-zag-pink-100 p-10 pt-5 max-[320px]:p-5">
              <div className="text-center mb-10">
                <p className="font-bold text-lg">Make payment</p>
              </div>
              <div className="mb-5">
                <label>Card number</label>
                <Input
                  placeholder="4242 4242 4242 4242"
                  name="cardNumber"
                  value={values.cardNumber}
                  type="string"
                  inputMode="numeric"
                  onChange={(e) => {
                    setFieldValue(
                      "cardNumber",
                      formatCardNumber(
                        limitLength(
                          values.cardNumber,
                          e.currentTarget.value.split(" ").join(""),
                          16
                        )
                      )
                    );
                  }}
                  onBlur={handleBlur}
                  isInvalid={touched.cardNumber && !!errors.cardNumber}
                  Icon={RiVisaLine}
                />
                <span className="text-rose-600 text-sm">
                  {touched.cardNumber && errors.cardNumber}
                </span>
              </div>

              <div className="mb-5">
                <label>Name on card</label>
                <Input
                  placeholder="George Hatzis"
                  name="nameOnCard"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  isInvalid={touched.nameOnCard && !!errors.nameOnCard}
                />
                <span className="text-rose-600 text-sm">
                  {touched.nameOnCard && errors.nameOnCard}
                </span>
              </div>

              <div className="flex space-x-3 mb-5">
                <div className="w-1/2">
                  <label>Expiration date</label>
                  <Input
                    placeholder="05/24"
                    type="string"
                    value={values.expirationDate}
                    name="expirationDate"
                    inputMode="numeric"
                    onChange={(e) => {
                      setFieldValue(
                        "expirationDate",
                        formatDate(
                          limitLength(
                            values.expirationDate,
                            e.currentTarget.value.split("/").join(""),
                            4
                          )
                        )
                      );
                    }}
                    onBlur={handleBlur}
                    isInvalid={
                      touched.expirationDate && !!errors.expirationDate
                    }
                  />
                  <span className="text-rose-600 text-sm">
                    {touched.expirationDate && errors.expirationDate}
                  </span>
                </div>

                <div className="w-1/2">
                  <label className="flex space-x-1">
                    <span>Security code</span>{" "}
                    <div className="mt-1">
                      <AiFillQuestionCircle color="#7E797C" />
                    </div>
                  </label>
                  <Input
                    placeholder="123"
                    type="number"
                    value={values.securityCode}
                    name="securityCode"
                    onChange={(e) => {
                      setFieldValue(
                        "securityCode",
                        limitLength(
                          values.securityCode,
                          e.currentTarget.value,
                          3
                        )
                      );
                    }}
                    onBlur={handleBlur}
                    isInvalid={touched.securityCode && !!errors.securityCode}
                  />
                  <span className="text-rose-600 text-sm">
                    {touched.securityCode && errors.securityCode}
                  </span>
                </div>
              </div>

              <IconButton
                className="bg-zag-pink-200 text-white w-full rounded-lg py-6 font-bold"
                text="Pay now"
                icon={<LockIcon color="white" size={20} />}
                type="submit"
              />
            </div>
          </form>
        )}
      </Formik>
    </PageWrapper>
  );
}
