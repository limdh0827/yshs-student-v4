import { useEffect, useState } from "react";
import { Field, Form, Formik } from "formik";
import { setUserDb, getAllergies } from "../../lib/db";

const AllergiesForm = ({ uid }) => {
  const [initialAl, setInitialAl] = useState([]);

  useEffect(() => {
    // TODO - SSR 비교
    getAllergies(uid).then((result) => {
      setInitialAl(result);
    });
  }, [uid]);

  return (
    <div className="w-full mx-auto bg-gray-50 rounded-lg p-3">
      <div className="mb-5">
        <p className="text-3xl">알레르기 설정</p>
        <p className="text-sm">알레르기 유발 식품 종류를 선택해주세요.</p>
      </div>

      <Formik
        initialValues={{ al: initialAl }}
        enableReinitialize={true}
        onSubmit={async (values) => {
          setUserDb(uid, {
            allergies: values.al,
          }).then(() => alert("저장되었습니다."));
        }}
      >
        {({ values }) => (
          <Form>
            <div role="group" className="grid grid-cols-4 gap-2">
              <label>
                <Field className="mr-1" type="checkbox" name="al" value="1" />
                <span>난류</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="2" />
                <span>우유</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="3" />
                <span>메밀</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="4" />
                <span>땅콩</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="5" />
                <span>대추</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="6" />
                <span>밀</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="7" />
                <span>고등어</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="8" />
                <span>게</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="9" />
                <span>새우</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="10" />
                <span>돼지고기</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="11" />
                <span>복숭아</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="12" />
                <span>토마토</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="13" />
                <span>아황산염</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="14" />
                <span>호두</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="15" />
                <span>닭고기</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="16" />
                <span>소고기</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="17" />
                <span>오징어</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="18" />
                <span>조개류</span>
              </label>

              <label>
                <Field className="mr-1" type="checkbox" name="al" value="19" />
                잣
              </label>
            </div>
            <button
              type="submit"
              className="bg-yellow-300 rounded-md px-2 mt-5 w-full"
            >
              저장하기
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AllergiesForm;
