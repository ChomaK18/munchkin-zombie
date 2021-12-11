import { Form, Formik } from "formik";
import ExtraLevelField from "./ExtraLevelField";
import TextField from "./TextField";

const EditMonster = ({ monster, setEditMonsterOn }) => {
  return (
    <div className="d-flex flex-column">
      <h4>Edytuj potwora</h4>
      <Formik
        initialValues={{
          name: monster.name,
          level: monster.level,
          desc: monster.desc,
          badStuff: monster.badStuff,
          treasures: monster.treasures,
          extraLevel: monster.extraLevel,
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {(props) => (
          <Form className="d-flex flex-column">
            <TextField name="name" type="text" label="Nazwa: " />
            <TextField
              name="level"
              type="number"
              label="Poziom: "
              max="20"
              min="1"
            />
            <TextField name="desc" type="text" label="Opis: " />
            <TextField name="badStuff" type="text" label="Marny koniec: " />
            <TextField
              name="treasures"
              type="number"
              label="Liczba skarbów: "
              max="0"
              min="5"
            />
            <ExtraLevelField name="extraLevel" label="Nagroda: " />
            <div>
              <button type="submit" className="btn btn-secondary m-2 col-4">
                Zatwierdź
              </button>
              <button
                onClick={() => {
                  setEditMonsterOn(false);
                }}
                className="btn btn-secondary m-2 col-4"
              >
                Anuluj
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default EditMonster;
