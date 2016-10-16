<?php
// Se define la cadena de conexión

if (!function_exists('sqlsrv_connect')) {
  exit( "Solo disponible para PHP 5.3 o superior" );
}


$connectionInfo = array( "Database"=>"testconndb");

$serverName = "localhost";

// Se realiza la conexón con los datos especificados anteriormente
$conn = sqlsrv_connect( $serverName, $connectionInfo);


if( $conn === false )
{
     echo "No se pudo realizar la conexion.\n";
     die( print_r( sqlsrv_errors(), true));
}

// Se define la consulta que va a ejecutarse
$sql = "SELECT * FROM Tabla";

// Se ejecuta la consulta y se guardan los resultados en el recordset rs
$rs =  sqlsrv_query( $conn, $sql );

if ( !$rs )
{
	exit( "Error en la consulta SQL" );
}
// Se muestran los resultados

while ( $row = sqlsrv_fetch_array($rs,SQLSRV_FETCH_ASSOC))
{

echo $row["Campo"];


}
// Se cierra la conexión
sqlsrv_close( $conn );
?>