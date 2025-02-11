import "@/app/globals.css";


export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

	return (
		<html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Store</title>
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
	);
}