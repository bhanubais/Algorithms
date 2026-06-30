param (
    [Parameter(Mandatory = $true)]
    [string]$TargetDir
)

$JunitJar = "lib\junit-platform-console-standalone-6.1.1.jar"
$GsonJar = "lib\gson-2.14.0.jar"
$ClassPath = ".;$JunitJar;$GsonJar;$TargetDir;$TargetDir\__tests__"

Write-Host "Compiling Java architecture in $TargetDir..."
javac -cp $ClassPath "$TargetDir\*.java" "$TargetDir\__tests__\*.java"

if ($LASTEXITCODE -ne 0) {
    Write-Host "Compilation failed. Audit your syntax."
    exit $LASTEXITCODE
}

Write-Host "Executing JUnit metrics..."
java -jar $JunitJar execute --class-path $ClassPath --scan-classpath
