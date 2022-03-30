<?php
    // header('Content-type: json/application; charset=UTF-8;');
class Api {

  public function selectAll ($connect) {
    $res = mysqli_query($connect,"SELECT * FROM product");
    mysqli_close($connect);
    $arr = [];
    while($i = mysqli_fetch_assoc($res)){
      $arr[] = $i;
    }
    echo json_encode($arr);
  }
}