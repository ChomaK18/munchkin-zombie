import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import ExtraLevelField from "./ExtraLevelField";
import TextField from "./TextField";

const AddFormSchema = Yup.object().shape({
  name: Yup.string().required("Wprowadź nazwę"),
  desc: Yup.string().required("Wprowadź opis").max(255, "Zbyt długi tekst"),
  badStuff: Yup.string()
    .required("Wprowadź Marny Koniec")
    .max(255, "Zbyt długi tekst"),
  level: Yup.number().min(1, "Poziom musi być >0").max(20, "Za wysoki poziom"),
  treasures: Yup.number()
    .min(0, "Liczba skarbów musi być >=0")
    .max(5, "Za dużo skarbów"),
});

const AddMonster = ({ insertRecord }) => {
  return (
    <div className="col-3">
      <h4>Dodaj nowego potwora</h4>
      <Formik
        initialValues={{
          name: "",
          level: "1",
          desc: "",
          badStuff: "",
          treasures: "0",
          extraLevel: false,
        }}
        onSubmit={async (values, actions) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
          insertRecord(values);
          actions.resetForm();
        }}
        validationSchema={AddFormSchema}
      >
        {(props) => (
          <Form className="d-flex flex-column needs-validation">
            <TextField name="name" type="text" label="Nazwa: " />
            <TextField
              name="level"
              label="Poziom: "
              type="number"
              max="20"
              min="1"
            />
            <TextField name="desc" type="text" label="Opis:" />
            <TextField
              name="badStuff"
              type="text"
              label="Marny koniec: "
            />
            <TextField
              name="treasures"
              type="number"
              label="Liczba skarbów: "
              min="0"
              max="5"
            />
            <ExtraLevelField name="extraLevel" label="Nagroda: " />
            <button type="submit" className="btn btn-secondary mx-auto col-4">
              Dodaj
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddMonster;
