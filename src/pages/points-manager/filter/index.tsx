import { useContextValue } from "@/context";

const Filter = () => {
  const { dispatch } = useContextValue();

  return (
    <div className="mx-auto mb-4 flex w-full max-w-[1169px] items-center gap-3 pr-[50px]">
      <span className="text-[18px] text-[#00131C]">نمایش افراد تیم</span>
      <label className="switch">
        <input
          type="checkbox"
          onChange={(e) =>
            dispatch({ type: "SPRINTS", payload: e.target.checked })
          }
        />
        <span className="slider"></span>
      </label>
    </div>
  );
};

export default Filter;
