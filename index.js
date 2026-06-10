import express from "express";

const app = express();
const PORT = process.env.PORT || 6969;
const VERSION = process.env.VERSION || "VERSION 1";

app.get("/", (_, res) => {
	res.send("Hehe server is working");
});

app.get("/health", (_, res) => {
	res.status(200).json({
		status: "OK",
		message: "server is healthy",
	});
});

app.get("/version", (_, res) => {
	res.json({
		version: `${VERSION}`,
	});
});

app.listen(PORT,()=>{
	console.log(`SERVER is running on http://localhost:${PORT}`)
}) 
