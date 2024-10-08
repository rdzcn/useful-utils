import { Pagination as MuiPagination } from "@mui/material";
import { GridPagination } from "@mui/x-data-grid";

function Pagination({ count, page, onPageChange }: any) {
	return (
		<MuiPagination
			color="primary"
			count={count}
			page={page}
			sx={{
				MuiTablePaginationSpacer: "none",
			}}
			onChange={(event, newPage) => {
				onPageChange(event, newPage);
			}}
		/>
	);
}

export default function CustomPagination(props: any) {
	return <GridPagination ActionsComponent={Pagination} {...props} />;
}
