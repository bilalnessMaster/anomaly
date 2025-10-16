

export const exportTableToExcel = async () => {
 


  try {

    const response = await fetch(

      `/api/screenshot?url=http://localhost:3000/rapport`

    );

    if (!response.ok) {

      throw new Error("Failed to capture screenshot.");

    }

    const blob = await response.blob();

    setScreenshot(URL.createObjectURL(blob));

  } catch (err) {

   console.log(err) 

  } finally {

      }
};
