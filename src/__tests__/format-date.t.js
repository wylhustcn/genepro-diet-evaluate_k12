import { formatDate } from "../shared/format-date";
test("format date testing ...", () => {
    const fmt = "d-dd-ddd-M-MM-MMM-MMMM-yy-yyyy-h-hh-H-HH-m-mm-s-ss-l-L-tt-TT-Z";
    const now = formatDate(new Date(), fmt);
    console.log("%s", fmt);
    console.log("%s", now);

    expect(now).not.toBeNull();
});
