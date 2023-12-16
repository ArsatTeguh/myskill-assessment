import React from 'react';

type Props = {
  submit: () => void;
  add: () => void;
  load: boolean;
  check: boolean;
};

function ActionButton({
  submit, add, load, check,
}: Props) {
  return (
    <div className="w-[810px] flex items-center gap-4">
      <button
        type="button"
        className="py-[11px] px-[22px] border rounded border-[#10A4B0] font-semibold text-[15px] text-[#10A4B0]"
        onClick={add}
      >
        + Add Portofolio
      </button>
      <button
        type="button"
        className="py-[11px] z-10 px-[22px] border rounded bg-[#10A4B0] font-semibold text-[15px] text-white disabled:bg-secondary disabled:text-zinc-400"
        onClick={submit}
        disabled={load || check}
      >
        Simpan Perubahan
      </button>
    </div>
  );
}
export default ActionButton;
